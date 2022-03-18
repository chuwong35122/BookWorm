import {StyleSheet, TouchableOpacity} from 'react-native';
import {HStack, Image, Text, View} from 'native-base';
import React from 'react';
import {Book} from './../../libs/books/book.interface';

type BookSearchItemProps = {
  data: Book;
};

const BookSearchItem = ({data}: BookSearchItemProps) => {
  return (
    <View my={1} backgroundColor="red.100">
      <TouchableOpacity>
        <View
          flexDir="row"
          justifyContent="space-between"
          alignItems="center"
          px={2}>
          <Image
            source={{uri: data.volumeInfo.imageLinks.thumbnail}}
            width="32"
            height="48"
            alt={data.volumeInfo.title}
            mr={4}
            style={styles.image}
          />
          <View flex={1} alignItems="flex-start">
            <Text
              numberOfLines={3}
              flexWrap="wrap"
              fontSize="lg"
              fontWeight="600">
              {data.volumeInfo.title}
            </Text>
            <HStack space={2}>
              <Text>by</Text>
              <HStack flexDir="row" space={2}>
                {data.volumeInfo.authors.map((author, key) => {
                  return (
                    <View key={key}>
                      <Text>{author}</Text>
                    </View>
                  );
                })}
              </HStack>
            </HStack>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BookSearchItem;

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
  },
});
