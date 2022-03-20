import {getAuth} from 'firebase/auth';
import {Button, Icon, Text, View} from 'native-base';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SignOutButton = () => {
  const auth = getAuth();
  function handlePressSignOut() {
    console.log('sign out!');
    auth.signOut();
  }

  return (
    <View justifyContent="center" alignItems="center" my={10}>
      <Button
        leftIcon={
          <Icon as={MaterialIcons} size={7} name="exit-to-app" color="#000" />
        }
        variant="outline"
        colorScheme="dark"
        w="64"
        onPress={handlePressSignOut}>
        <Text fontSize="lg" color="#000">
          Sign-out
        </Text>
      </Button>
    </View>
  );
};

export default SignOutButton;
