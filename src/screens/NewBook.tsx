import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';
import React from 'react';
// import {Button, Input, Image} from 'react-native-elements';
import {Button, Input} from 'native-base';

const NewBook = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'NewBook'>) => {
  const [isbn, setIsbn] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.genre}>Add a New {route.params.genre} Book</Text>
      <View style={styles.bookPreview}>
        {/* <Image
          source={{
            uri: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
          }}
          containerStyle={styles.previewImage}
          PlaceholderContent={<ActivityIndicator />}
        /> */}
      </View>
      <Input placeholder="Input ISBN" w="xl" />

      {/* <Button
        title="SEARCH"
        buttonStyle={{
          backgroundColor: '#000',
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{fontWeight: 'bold'}}
      /> */}
    </View>
  );
};

export default NewBook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(217, 203, 194)',
  },
  genre: {
    fontSize: 20,
  },
  bookPreview: {
    flex: 1,
    width: '80%',
    marginVertical: 10,
  },
  previewImage: {
    resizeMode: 'contain',
    flex: 1,
  },
});
