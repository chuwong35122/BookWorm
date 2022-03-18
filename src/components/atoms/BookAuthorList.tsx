import {View, HStack, Text} from 'native-base';
import React from 'react';

type BookAuthorListType = {
  authors: string[];
};

const BookAuthorList = ({authors}: BookAuthorListType) => {
  return (
    <HStack space={2}>
      <Text color="gray.500">by</Text>
      <View flexDir="row" flexWrap="wrap">
        {authors.map((author: string, key) => {
          return (
            <Text color="gray.500" mr="4" key={key}>
              {author}
            </Text>
          );
        })}
      </View>
    </HStack>
  );
};

export default BookAuthorList;
