import {StyleSheet, View} from 'react-native';
import {Icon, Input, Text} from 'native-base';
import {FlatList} from 'react-native-gesture-handler';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const RecentBooks = () => {
  const [recent, setRecent] = React.useState([]);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.shelf}>
      <Input
        mx={4}
        mt={2}
        mb={6}
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
        onFocus={() => navigation.navigate('SearchBook')}
        showSoftInputOnFocus
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
