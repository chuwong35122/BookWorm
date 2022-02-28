import {StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';
import React from 'react';
import {Button, Input} from 'react-native-elements';
import MaskInput from 'react-native-masked-input';

const NewBook = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'NewBook'>) => {
  const [isbn, setIsbn] = React.useState('');
  const isbnMask = [];

  return (
    <>
      <View>
        <Text style={styles.genre}>{route.params.genre}</Text>
      </View>
      <View style={styles.container}>
        <Input placeholder="Input ISBN" />
        {/* <MaskInput
          placeholder="Input ISBN"
          value={isbn}
          onChangeText={(maskedText, rawValue) => setIsbn(rawValue.toString())}
          mask={[
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            '-',
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
          ]}
        /> */}
        <Button
          title="SEARCH"
          buttonStyle={{
            backgroundColor: 'rgb(217,203,194)',
            borderRadius: 30,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{fontWeight: 'bold'}}
        />
      </View>
    </>
  );
};

export default NewBook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  genre: {
    fontSize: 20,
  },
});
