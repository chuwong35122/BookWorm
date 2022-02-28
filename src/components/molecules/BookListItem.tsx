import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Genre} from '../../screens/Home';

type BookListItemType = {
  data: Genre;
};

const BookListItem = ({data}: BookListItemType) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Pressable style={[styles.container, {backgroundColor: data.bgColor}]}>
      <Text style={styles.title}>{data.title}</Text>
    </Pressable>
  );
};

export default BookListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 160,
    maxHeight: 200,
    width: 80,
    marginVertical: 10,
    marginHorizontal: 4,
    borderRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    transform: [{rotate: '90deg'}],
  },
});
