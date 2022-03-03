import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  Text,
  Input,
  FormControl,
  WarningOutlineIcon,
  ScrollView,
} from 'native-base';

const EmailSignUp = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.signInContainer}>
          <Text fontSize="md">Already have an account? Sign-in here!</Text>
          <FormControl isInvalid w="85%" my="4">
            <FormControl.Label>Email</FormControl.Label>
            <Input placeholder="Enter Email" />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Error
            </FormControl.ErrorMessage>
            <FormControl.Label>Password</FormControl.Label>
            <Input placeholder="Enter password" />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Try different from previous passwords.
            </FormControl.ErrorMessage>
          </FormControl>
        </View>
        <View style={styles.signInContainer}>
          <Text fontSize="md">
            Using BookSelf for the first time? Sign-up here!
          </Text>
          <View style={styles.signInContainer}>
            <FormControl isInvalid w="85%" my="4">
              <FormControl.Label>Email</FormControl.Label>
              <Input placeholder="Enter Email" />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                Error0
              </FormControl.ErrorMessage>
              <FormControl.Label>Password</FormControl.Label>
              <Input placeholder="Enter password" />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                Error1
              </FormControl.ErrorMessage>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input placeholder="Confirm password" />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                Error2
              </FormControl.ErrorMessage>
            </FormControl>
          </View>
        </View>
      </View>
    </ScrollView>
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
