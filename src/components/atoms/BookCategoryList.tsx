import {View, Text, HStack} from 'native-base';
import React from 'react';

type BookCategoryListProps = {
  categories: string[];
};

const BookCategoryList = ({categories}: BookCategoryListProps) => {
  return (
    <HStack space={2}>
      {categories.map((category, key) => {
        return (
          <View key={key} bgColor="rose.600" py={1} px={2} borderRadius="full">
            <Text fontSize="md" color="#fff" bold>
              {category}
            </Text>
          </View>
        );
      })}
    </HStack>
  );
};

export default BookCategoryList;
