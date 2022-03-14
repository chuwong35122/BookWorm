import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text, Icon} from 'native-base';
import BookSearchInput from '../components/molecules/BookSearchInput';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';

const SearchBook = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'SearchBook'>) => {
  const {q, setQ, search, setSearch} = route.params;

  return (
    <View>
      <Icon
        as={<MaterialIcons name="arrow-back-ios" />}
        size={8}
        ml={4}
        mt={2}
        color="muted.400"
        onPress={() => navigation.goBack()}
      />
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

const styles = StyleSheet.create({});
