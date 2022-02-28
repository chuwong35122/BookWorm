import {StyleSheet, View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import React from 'react';
import BookListItem from './../components/molecules/BookListItem';

const Home = () => {
  const [current, setCurrent] = React.useState('Action');
  const genres = [
    {title: 'Action', bgColor: '#e53935'},
    {title: 'Mystery', bgColor: '#424242'},
    {title: 'Fantasy', bgColor: '#fbc02d'},
    {title: 'Horror', bgColor: '#4a148c'},
    {title: 'Literary Fiction', bgColor: '#ab47bc'},
    {title: 'Romance', bgColor: '#ff80ab'},
    {title: 'Science Fiction', bgColor: '#ff9800'},
    {title: 'Thriller', bgColor: '#c41c00'},
    {title: 'Biography', bgColor: '#795548'},
    {title: 'History', bgColor: '#5d4037'},
    {title: 'Memoir', bgColor: '#01579b'},
    {title: 'Poetry', bgColor: '#f06292'},
    {title: 'Self-Enrichment', bgColor: '#4caf50'},
    {title: 'True Crime', bgColor: '#000'},
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={genres}
        renderItem={({item}) => (
          <BookListItem category={item.title} bgColor={item.bgColor} />
        )}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.cabinet} />

      <View style={styles.preview}>
        <Text>{current}</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#212121',
  },
  cabinet: {
    width: '100%',
    backgroundColor: '#4b2c20',
    height: 30,
    position: 'absolute',
    top: 180,
  },
  preview: {
    height: '60%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
});
