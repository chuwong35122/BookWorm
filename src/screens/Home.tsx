import {StyleSheet, View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import React from 'react';
import BookListItem from './../components/molecules/BookListItem';
import {GENRES} from '../libs/constant';
import useAsyncEffect from './../hooks/useAsyncEffect';
import {getBooksByGenre} from '../libs/storage';
import {FAB, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';

const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [current, setCurrent] = React.useState('Action');
  const [books, setBooks] = React.useState([]);

  useAsyncEffect(async () => {
    const result = await getBooksByGenre(current);
    setBooks(result);
  }, [current]);

  return (
    <View style={styles.container}>
      <FlatList
        data={GENRES}
        renderItem={({item}) => (
          <BookListItem data={item} setCurrent={setCurrent} />
        )}
        keyExtractor={(_, index) => index.toString()}
        // onViewableItemsChanged={({changed, viewableItems}) => {
        //   console.log(viewableItems[0].item.title);
        //   // setCurrent(viewableItems[0].item.title);
        // }}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.shelf}
      />

      <View style={styles.preview}>
        <FAB
          visible={true}
          icon={{name: 'add'}}
          color="rgb(187,220,203)"
          onPress={() => navigation.navigate('NewBook', {genre: current})}
          placement="right"
        />
        {books.length > 0 ? (
          <FlatList
            data={books}
            renderItem={({item}) => (
              <BookListItem data={item} setCurrent={setCurrent} />
            )}
            keyExtractor={(_, index) => index.toString()}
          />
        ) : (
          <View style={{flexDirection: 'row'}}>
            <Text>Memo your first </Text>
            <Text style={{fontWeight: 'bold'}}>{current}</Text>
            <Text> book now!</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(253,238,179)',
  },
  shelf: {
    backgroundColor: '#fff',
    height: 340,
    marginBottom: 10,
    // elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
  },
  preview: {
    height: '70%',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
});
