import {StyleSheet, TouchableOpacity} from 'react-native';
import {HStack, Image, Text, View} from 'native-base';
import React from 'react';
import {Book} from './../../libs/books/book.interface';
import BookAuthorList from './../atoms/BookAuthorList';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';

type BookSearchItemProps = {
  data: Book;
};

const BookSearchItem = ({data}: BookSearchItemProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View my={2} flex={1}>
      <TouchableOpacity onPress={() => navigation.navigate('BookDetail', data)}>
        <View
          flexDir="row"
          w="full"
          justifyContent="space-between"
          alignItems="center"
          px={4}>
          <Image
            source={{uri: data.volumeInfo.imageLinks.thumbnail}}
            width="32"
            height="48"
            alt={data.volumeInfo.title}
            mr={4}
            style={styles.image}
          />
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
                {data.volumeInfo.title}
              </Text>
              <BookAuthorList authors={data.volumeInfo.authors} />
            </View>
            <HStack space={2}>
              {data.volumeInfo.categories &&
                data.volumeInfo.categories.map((category, key) => {
                  return (
                    category && (
                      <Text fontSize="md" color="rose.500" key={key}>
                        {category.toString()}
                      </Text>
                    )
                  );
                })}
            </HStack>
            {data.volumeInfo.averageRating ? (
              <Text fontSize="md" color="blueGray.500">
                Ratings: {data.volumeInfo.averageRating} / 5
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
