import {Text, HStack, Badge} from 'native-base';
import React from 'react';

type BookCategoryListProps = {
  categories: string[] | undefined;
};

const BookCategoryList = ({categories}: BookCategoryListProps) => {
  return (
    <HStack space={2} mt={4}>
      {categories ? (
        <>
          {categories.map((category, key) => {
            return (
              <Badge variant="solid" colorScheme="info" key={key}>
                <Text fontSize="sm" color="#fff" bold>
                  {category}
                </Text>
              </Badge>
            );
          })}
        </>
      ) : (
        <Badge variant="solid" colorScheme="muted.400">
          <Text fontSize="sm" color="#fff" bold>
            No Category
          </Text>
        </Badge>
      )}
    </HStack>
  );
};

export default BookCategoryList;
