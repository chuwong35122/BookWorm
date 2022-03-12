import {Dimensions, StyleSheet, View} from 'react-native';
import {Text, Button, Icon, Stack, Input, HStack, Pressable} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';
import {signInWithEmail} from '../libs/authentication/signup';
import {getAuth} from 'firebase/auth';

const AuthScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [show, setShow] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handleSignIn() {
    const credential = await signInWithEmail(email, password);
    if (!credential.uid) {
      const auth = getAuth();
      auth.signOut();
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.top} />
      <View style={styles.bottom}>
        <Stack space={4} w="100%" alignItems="center">
          <Text bold fontSize="xl">
            Sign-in
          </Text>
          <Input
            value={email}
            onChangeText={val => setEmail(val)}
            w={{
              base: '75%',
              md: '25%',
            }}
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="person" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            placeholder="Email"
          />
          <Input
            value={password}
            onChangeText={val => setPassword(val)}
            w={{
              base: '75%',
              md: '25%',
            }}
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
            placeholder="Password"
          />
          <Button
            variant="solid"
            w="75%"
            backgroundColor="#FFDD57"
            _text={{
              color: '#1F2937',
            }}
            onPress={handleSignIn}>
            Sign-In
          </Button>
          <HStack space={4} justifyContent="space-evenly">
            <Pressable onPress={() => console.log('Forgot password')}>
              <Text color="gray.500">Forgot Password?</Text>
            </Pressable>
            <Text color="gray.500">|</Text>
            <Pressable onPress={() => navigation.navigate('EmailSignUp')}>
              <Text color="gray.500">Sign-up</Text>
            </Pressable>
          </HStack>
        </Stack>
      </View>
    </View>
  );
};

export default AuthScreen;

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEE3DB',
  },
  top: {
    backgroundColor: '#BEE3DB',
    width: '100%',
    flex: 1,
  },
  bottom: {
    backgroundColor: '#fff',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: width / 3,
    borderTopRightRadius: width / 3,
  },
});
