import {StyleSheet, TouchableOpacity} from 'react-native';
import {Image, Text, View} from 'native-base';
import React from 'react';
import {Book} from './../../libs/books/book.interface';
import BookAuthorList from './../atoms/BookAuthorList';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import BookCategoryList from './../atoms/BookCategoryList';

type BookSearchItemProps = {
  data: Book;
};

const BookSearchItem = ({data}: BookSearchItemProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const {authors, imageLinks, title, categories, averageRating} =
    data.volumeInfo;
  return (
    <View my={2} flex={1}>
      <TouchableOpacity onPress={() => navigation.navigate('BookDetail', data)}>
        <View
          flexDir="row"
          w="full"
          justifyContent="space-between"
          alignItems="center"
          px={4}>
          {imageLinks ? (
            <Image
              source={{uri: imageLinks.thumbnail}}
              width="32"
              height="48"
              alt={title}
              mr={4}
              style={styles.image}
            />
          ) : (
            <View
              width="32"
              height="48"
              alignItems="center"
              justifyContent="center"
              bgColor="coolGray.800"
              mr={4}>
              <Text fontSize="xs" color="#fff">
                No Preview Image
              </Text>
            </View>
          )}
          <View
            justifyContent="space-between"
            alignItems="flex-start"
            flex={1}
            py={2}>
            <View flex={1}>
              <Text
                numberOfLines={3}
                flexWrap="wrap"
                fontSize="lg"
                color="orange.600"
                fontWeight="600">
                {title}
              </Text>
              {authors ? (
                <BookAuthorList authors={authors} />
              ) : (
                <Text color="gray.500">by Unknown author</Text>
              )}
            </View>

            <BookCategoryList categories={categories} />

            {averageRating ? (
              <Text fontSize="md" color="blueGray.500">
                Ratings: {averageRating} / 5
              </Text>
            ) : (
              <Text fontSize="md" color="blueGray.500">
                No Rating
              </Text>
            )}
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
