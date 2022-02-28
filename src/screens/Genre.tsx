import {StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';
import React from 'react';

const Genre = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Genre'>) => {
  return (
    <View>
      <Text>{route.params.bgColor}</Text>
    </View>
  );
};

export default Genre;

const styles = StyleSheet.create({});
