import {Icon, Input, HStack, Radio, FlatList, View} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {useDebounce} from 'use-debounce';
import {searchBookByTitle} from '../../libs/books/search';
import useAsyncEffect from './../../hooks/useAsyncEffect';
import {Book} from '../../libs/books/book.interface';
import BookSearchItem from './BookSearchItem';

export type Query =
  | 'title'
  | 'intitle'
  | 'inauthor'
  | 'inpublisher'
  | 'subject'
  | 'isbn'
  | 'lccn'
  | 'oclc';

type BookSearchInputProps = {
  q: Query;
  setQ: (val: Query) => void;
  search: string;
  setSearch: (val: string) => void;
};

const BookSearchInput = ({
  q,
  setQ,
  search,
  setSearch,
}: BookSearchInputProps) => {
  const [searchValue] = useDebounce(search, 750);
  const [placeholder, setPlaceholder] = React.useState('');
  const [results, setResults] = React.useState<Book[]>();

  useAsyncEffect(async () => {
    if (searchValue === '') {
      return;
    }

    if (q === 'title') {
      const books = await searchBookByTitle(searchValue);
      setResults(books);
    } else if (q === 'isbn') {
    }
  }, [searchValue, q]);

  /**
   * A function that change placeholder value based on q.
   */
  React.useEffect(() => {
    if (q === 'inauthor') {
      setPlaceholder('Search books with its author.');
    } else if (q === 'title') {
      setPlaceholder('Search books with its title.');
    } else if (q === 'isbn') {
      setPlaceholder('Search books with its ISBN.');
    }
  }, [q]);

  return (
    <View flex={1}>
      <Radio.Group
        defaultValue="1"
        name="Book search type"
        accessibilityLabel="Select search type"
        value={q}
        onChange={val => setQ(val as Query)}>
        <HStack alignSelf="center" justifyContent="space-between" space={5}>
          <Radio value="title" my={1}>
            Title
          </Radio>
          <Radio value="isbn" my={1}>
            ISBN
          </Radio>
        </HStack>
      </Radio.Group>
      <Input
        value={search}
        onChangeText={val => setSearch(val)}
        mx={4}
        mt={2}
        mb={6}
        placeholder={placeholder}
        height="10"
        fontSize="md"
        backgroundColor="#fff"
        variant="rounded"
        autoFocus
        InputLeftElement={
          <Icon
            as={MaterialIcons}
            name="search"
            size={8}
            color="gray.400"
            ml={2}
          />
        }
      />
      <FlatList
        data={results}
        renderItem={({item}) => <BookSearchItem data={item} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default BookSearchInput;
