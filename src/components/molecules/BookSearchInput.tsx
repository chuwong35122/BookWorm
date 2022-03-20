import {StyleSheet, View} from 'react-native';
import {Icon, Input, HStack, Radio, FlatList} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import {useDebounce} from 'use-debounce';
import {searchBookByQ} from '../../libs/books/search';
import useAsyncEffect from './../../hooks/useAsyncEffect';
import {Book} from '../../libs/books/book.interface';
import BookSearchItem from './BookSearchItem';

export type Query =
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
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [searchValue] = useDebounce(search, 750);
  const [placeholder, setPlaceholder] = React.useState('');
  const [results, setResults] = React.useState<Book[]>();

  useAsyncEffect(async () => {
    console.log(q);
    if (searchValue === '') {
      return;
    }

    const books = await searchBookByQ(q, searchValue);
    setResults(books.items);
    console.log(results);
  }, [searchValue, q]);

  /**
   * A function that change placeholder value based on q.
   */
  React.useEffect(() => {
    if (q === 'inauthor') {
      setPlaceholder('Search books with its author.');
    } else if (q === 'intitle') {
      setPlaceholder('Search books with its title.');
    } else if (q === 'isbn') {
      setPlaceholder('Search books with its ISBN.');
    }
  }, [q]);

  return (
    <View>
      <Radio.Group
        defaultValue="1"
        name="Book search type"
        accessibilityLabel="Select search type"
        value={q}
        onChange={val => setQ(val as Query)}>
        <HStack alignSelf="center" justifyContent="space-between" space={5}>
          <Radio value="intitle" my={1}>
            Title
          </Radio>
          <Radio value="isbn" my={1}>
            ISBN
          </Radio>
          <Radio value="inauthor" my={1}>
            Author
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
        px={4}
        backgroundColor="#fff"
        variant="rounded"
        autoFocus
        InputRightElement={
          <Icon
            as={MaterialIcons}
            name="search"
            size={8}
            color="gray.400"
            mr={4}
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

const styles = StyleSheet.create({});
