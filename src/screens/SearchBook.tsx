import React from 'react';
import {View} from 'native-base';
import BookSearchInput, {Query} from '../components/molecules/BookSearchInput';

const SearchBook = () => {
  const [q, setQ] = React.useState<Query>('title');
  const [search, setSearch] = React.useState('');

  return (
    <View flex={1}>
      <BookSearchInput
        q={q}
        setQ={setQ}
        search={search}
        setSearch={setSearch}
      />
    </View>
  );
};

export default SearchBook;
