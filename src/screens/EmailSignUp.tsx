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
} from 'native-base';
import {Formik} from 'formik';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NewAccount} from '../interfaces/user.interface';
import {
  signUpErrors,
  emailSignUpFormValidation,
} from './../libs/authentication/signup';

const EmailSignUp = () => {
  const [show, setShow] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);

  const account: NewAccount = {
    email: undefined,
    username: undefined,
    password: undefined,
    confirmPassword: undefined,
  };

  function onSubmit(data: NewAccount) {
    console.log(data);
  }

  return (
    <Formik
      initialValues={account}
      onSubmit={onSubmit}
      validationSchema={emailSignUpFormValidation}>
      {({handleChange, handleSubmit, errors}) => (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.signInContainer}>
              <Text fontSize="xl" bold>
                Sign-Up
              </Text>
              <VStack w="90%" gap={4}>
                <FormControl isRequired isInvalid={'email' in errors}>
                  <FormControl.Label>Email</FormControl.Label>
                  <Input
                    placeholder="Enter Email"
                    onChangeText={handleChange('email')}
                  />
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}>
                    {errors.email}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={'username' in errors}>
                  <FormControl.Label>Username</FormControl.Label>
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
                    {errors.username}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={'password' in errors}>
                  <FormControl.Label>Password</FormControl.Label>
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
                    {errors.password}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={'confirmPassword' in errors}>
                  <FormControl.Label>Confirm Password</FormControl.Label>
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
                    {errors.confirmPassword}
                  </FormControl.ErrorMessage>
                </FormControl>
                <Button
                  variant="solid"
                  backgroundColor="#FFDD57"
                  _text={{
                    color: '#1F2937',
                  }}
                  mt={4}
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
  },
  signInContainer: {
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
});
