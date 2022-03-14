import {StyleSheet, View} from 'react-native';
import {Text} from 'native-base';
import {FlatList} from 'react-native-gesture-handler';
import React from 'react';
import BookSearchInput, {Query} from '../molecules/BookSearchInput';

const RecentBooks = () => {
  const [recent, setRecent] = React.useState([]);
  const [q, setQ] = React.useState<Query>('intitle');
  const [search, setSearch] = React.useState('');

  return (
    <View style={styles.shelf}>
      <BookSearchInput
        q={q}
        setQ={setQ}
        search={search}
        setSearch={setSearch}
      />
      <View style={styles.recently}>
        <Text fontSize="xl" bold mb={2}>
          Recently Opened
        </Text>
        {recent.length > 0 ? (
          <FlatList
            data={recent}
            renderItem={({item}) => <Text>{item}</Text>}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        ) : (
          <View style={styles.emptyShelf}>
            <Text color="gray.400" fontSize="md">
              Search your first book now!
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default RecentBooks;

const styles = StyleSheet.create({
  shelf: {
    flex: 2,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  emptyShelf: {
    alignSelf: 'center',
  },
  recently: {
    paddingHorizontal: 20,
  },
});
