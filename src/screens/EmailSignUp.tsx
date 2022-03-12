import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  Text,
  Input,
  FormControl,
  WarningOutlineIcon,
  ScrollView,
  Icon,
  Button,
  VStack,
  useToast,
} from 'native-base';
import {Formik} from 'formik';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NewAccount} from '../interfaces/user.interface';
import {
  emailSignUpFormValidation,
  signUpWithEmail,
  storeInitialUserInfo,
} from '../libs/authentication/signup';
import {AuthError, getAuth} from 'firebase/auth';

const EmailSignUp = () => {
  const [show, setShow] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);

  const toast = useToast();

  const account: NewAccount = {
    email: undefined,
    username: undefined,
    password: undefined,
    confirmPassword: undefined,
  };

  async function onSubmit(data: NewAccount) {
    if (
      !(
        data.email &&
        data.username &&
        data.username &&
        data.confirmPassword &&
        data.password
      )
    ) {
      return;
    }

    try {
      const credential = await signUpWithEmail(data.email, data.password);
      if (credential.uid) {
        await storeInitialUserInfo(data.username, credential.uid);
        toast.show({
          title: 'Account created! 🎊',
          status: 'success',
          description: 'Welcome to BookWorm.',
        });
      } else {
        const auth = getAuth();
        auth.signOut();
      }
    } catch (err) {
      // More info here: https://firebase.google.com/docs/auth/admin/errors
      const error = err as AuthError;
      let errorMessage = 'An unknown error has occurred.';

      if (error.code === 'auth/email-already-in-use') {
        errorMessage =
          'This email is already in used. Please use a new email address.';
      }

      toast.show({
        title: 'Cannot sign-up an account.',
        status: 'error',
        description: errorMessage,
      });
    }
  }

  return (
    <Formik
      initialValues={account}
      onSubmit={onSubmit}
      validationSchema={emailSignUpFormValidation}>
      {({handleChange, handleSubmit, errors, touched}) => (
        <ScrollView style={{backgroundColor: '#BEE3DB'}}>
          <View style={styles.container}>
            <View style={styles.signInContainer}>
              <Text fontSize="xl" bold my={4}>
                Sign-Up
              </Text>
              <VStack w="90%" space={4}>
                <FormControl isRequired isInvalid={'email' in errors}>
                  <Input
                    placeholder="Email"
                    onChangeText={handleChange('email')}
                  />
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}>
                    {touched.email ? errors.email : ''}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={'username' in errors}>
                  <Input
                    InputLeftElement={
                      <Icon
                        as={<MaterialIcons name="person" />}
                        size={5}
                        ml="2"
                        color="muted.400"
                      />
                    }
                    placeholder="Username"
                    onChangeText={handleChange('username')}
                  />
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}>
                    {touched.username ? errors.username : ''}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={'password' in errors}>
                  <Input
                    type={show ? 'text' : 'password'}
                    InputRightElement={
                      <Icon
                        as={
                          <MaterialIcons
                            name={show ? 'visibility' : 'visibility-off'}
                          />
                        }
                        size={5}
                        mr="2"
                        color="muted.400"
                        onPress={() => setShow(!show)}
                      />
                    }
                    onChangeText={handleChange('password')}
                    placeholder="Password"
                  />
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}>
                    {touched.password ? errors.password : ''}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={'confirmPassword' in errors}>
                  <Input
                    type={showConfirm ? 'text' : 'password'}
                    InputRightElement={
                      <Icon
                        as={
                          <MaterialIcons
                            name={showConfirm ? 'visibility' : 'visibility-off'}
                          />
                        }
                        size={5}
                        mr="2"
                        color="muted.400"
                        onPress={() => setShowConfirm(!showConfirm)}
                      />
                    }
                    onChangeText={handleChange('confirmPassword')}
                    placeholder="Confirm Password"
                  />
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}>
                    {touched.confirmPassword ? errors.confirmPassword : ''}
                  </FormControl.ErrorMessage>
                </FormControl>
                <Button
                  variant="solid"
                  backgroundColor="#FFDD57"
                  _text={{
                    color: '#1F2937',
                  }}
                  onPress={handleSubmit}>
                  Sign-up!
                </Button>
              </VStack>
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};

export default EmailSignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#BEE3DB',
  },
  signInContainer: {
    width: '100%',
    flex: 1,
    paddingBottom: 80,
    alignItems: 'center',
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    backgroundColor: '#fff',
  },
});
