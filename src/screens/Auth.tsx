import {Dimensions, StyleSheet, View} from 'react-native';
import {
  Text,
  Button,
  Icon,
  Stack,
  Input,
  Box,
  HStack,
  Pressable,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';

const Auth = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [show, setShow] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.top}></View>
      <View style={styles.bottom}>
        <Stack space={4} w="100%" alignItems="center">
          <Text bold fontSize="xl">
            Sign-in
          </Text>
          <Input
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
            }}>
            Success
          </Button>
          <HStack space={4} justifyContent="space-between">
            <Text color="gray.500">Forgot Password?</Text>
            <Text color="gray.500"> | </Text>
            <Pressable onPress={() => navigation.navigate('EmailSignUp')}>
              <Text color="gray.500">Sign-up</Text>
            </Pressable>
          </HStack>
        </Stack>
      </View>
    </View>
  );
};

export default Auth;

const {height, width} = Dimensions.get('window');
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
