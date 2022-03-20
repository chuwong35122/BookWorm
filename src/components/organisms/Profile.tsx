import {StyleSheet, Touchable, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image, HStack, VStack, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
const ProfilePic = require('../../assets/images/avatar.jpg');

const Profile = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <HStack space={5}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={ProfilePic}
            alt="Alternate Text"
            style={styles.profilePicture}
          />
        </TouchableOpacity>
        <VStack>
          <Text bold fontSize="xl" textAlign="center">
            Username
          </Text>
          <HStack space={5}>
            <View style={styles.statistics}>
              <Text bold fontSize="2xl">
                6
              </Text>
              <Text>Books</Text>
            </View>
            <View style={styles.statistics}>
              <Text bold fontSize="2xl">
                7
              </Text>
              <Text>Categories</Text>
            </View>
          </HStack>
        </VStack>
      </HStack>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEE3DB',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    paddingVertical: 40,
  },
  profilePicture: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  statistics: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
