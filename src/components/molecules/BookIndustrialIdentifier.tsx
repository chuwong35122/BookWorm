import {HStack, Text, View} from 'native-base';
import {Identifier} from '../../libs/books/book.interface';
import React from 'react';

type BookIndustrialIdentifier = {
  identifiers: Identifier[];
};

const BookIndustrialIdentifier = ({identifiers}: BookIndustrialIdentifier) => {
  return (
    <View flex={1}>
      {identifiers.map((identifier, key) => {
        return (
          <HStack space={2} key={key}>
            <Text>{identifier.type}</Text>
            <Text>{identifier.identifier}</Text>
          </HStack>
        );
      })}
    </View>
  );
};

export default BookIndustrialIdentifier;
