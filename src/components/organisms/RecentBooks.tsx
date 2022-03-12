import {StyleSheet, View} from 'react-native';
import {Icon, Input, Text} from 'native-base';
import {FlatList} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import React from 'react';

const RecentBooks = () => {
  const [recent, setRecent] = React.useState([]);

  return (
    <View style={styles.shelf}>
      <Input
        mx="3"
        placeholder="Search title/ISBN/author"
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
        my={4}
        alignSelf="center"
      />
      <View style={{paddingHorizontal: 20}}>
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
            <Text>(Maybe have some good starter here)</Text>
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
});
