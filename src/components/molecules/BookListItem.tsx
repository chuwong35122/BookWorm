import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type BookListItemType = {
  category: string;
  bgColor: string;
};

const BookListItem = ({category, bgColor}: BookListItemType) => {
  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <Text style={styles.title}>{category}</Text>
    </View>
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
  },
});
