import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Genre} from './../../libs/constant';

type BookListItemType = {
  data: Genre;
  setCurrent: (val: string) => void;
};

const BookListItem = ({data, setCurrent}: BookListItemType) => {
  // const navigation =
  // useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Pressable
      style={[styles.container, {backgroundColor: data.bgColor}]}
      onPress={() => setCurrent(data.title)}>
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
