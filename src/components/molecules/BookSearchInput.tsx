import {StyleSheet, View} from 'react-native';
import {Icon, Input, HStack, Radio} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDebounce} from 'use-debounce';

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
  const route = useRoute();
  const inputRef = React.useRef<any>();

  const [searchValue] = useDebounce(search, 750);
  const [placeholder, setPlaceholder] = React.useState('');

  React.useEffect(() => {
    console.log(searchValue);
    //     https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
  }, [searchValue]);

  React.useEffect(() => {
    if (q === 'inauthor') {
      setPlaceholder('Search books with its author.');
    } else if (q === 'intitle') {
      setPlaceholder('Search books with its title.');
    } else if (q === 'isbn') {
      setPlaceholder('Search books with its ISBN.');
    }
  }, [q]);

  React.useEffect(() => {
    if ((route.name as string) === 'SearchBook') {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [route]);

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
        ref={inputRef}
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
    </View>
  );
};

export default BookSearchInput;

const styles = StyleSheet.create({});
