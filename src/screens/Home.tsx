import {StyleSheet, View} from 'react-native';
import {ScrollView, Text} from 'native-base';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';
import RecentBooks from '../components/organisms/RecentBooks';

const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <>
      <RecentBooks />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.myBooks}>
            <Text bold fontSize="xl">
              My Books
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  myBooks: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
