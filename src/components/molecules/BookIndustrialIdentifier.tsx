import {Text, View} from 'native-base';
import {Identifier} from '../../libs/books/book.interface';
import React from 'react';

type BookIndustrialIdentifier = {
  identifiers: Identifier[];
};

const BookIndustrialIdentifier = ({identifiers}: BookIndustrialIdentifier) => {
  return (
    <View>
      {identifiers.map((identifier, key) => {
        <View key={key}>
          <Text>{identifier.type}</Text>
          <Text>{identifier.identifier}</Text>
        </View>;
      })}
    </View>
  );
};

export default BookIndustrialIdentifier;
