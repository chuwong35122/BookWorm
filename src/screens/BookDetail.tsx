import {StyleSheet, Linking} from 'react-native';
import React, {useCallback} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';
import {
  Image,
  ScrollView,
  Text,
  VStack,
  Button,
  Icon,
  View,
  useToast,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BookAuthorList from '../components/atoms/BookAuthorList';
import BookCategoryList from '../components/atoms/BookCategoryList';
import BookIndustrialIdentifier from './../components/molecules/BookIndustrialIdentifier';

const BookDetail = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'BookDetail'>) => {
  const {kind, saleInfo, selfLink, volumeInfo} = route.params;
  const toast = useToast();

  function handlePressAdd() {}

  const handlePressBuy = useCallback(async () => {
    const supported = await Linking.canOpenURL(volumeInfo.infoLink);

    if (supported) {
      await Linking.openURL(volumeInfo.infoLink);
    } else {
      toast.show({
        title: 'Cannot open Google Play page.',
        placement: 'bottom',
        status: 'error',
      });
    }
  }, [volumeInfo, toast]);

  return (
    <ScrollView>
      <VStack alignItems="center" py="8" space={3}>
        {volumeInfo.imageLinks ? (
          <Image
            source={{uri: volumeInfo.imageLinks.thumbnail}}
            alt={`Image of ${volumeInfo.title}`}
            width="64"
            height="64"
            style={styles.image}
          />
        ) : (
          <View
            width="64"
            height="64"
            alignItems="center"
            justifyContent="center"
            bgColor="coolGray.800"
            mr={4}>
            <Text fontSize="xs" color="#fff">
              No Preview Image
            </Text>
          </View>
        )}
        <Text fontSize="2xl" color="orange.400">
          {volumeInfo.title}
        </Text>
        <BookAuthorList authors={volumeInfo.authors} />
        <BookIndustrialIdentifier
          identifiers={volumeInfo.industryIdentifiers}
        />
        <BookCategoryList categories={volumeInfo.categories} />
        <View p={2}>
          <Text fontSize="lg" bold>
            Descriptions
          </Text>
          {volumeInfo.description ? (
            <Text fontSize="sm">{volumeInfo.description}</Text>
          ) : (
            <Text fontSize="sm" color="coolGray.500">
              (no description)
            </Text>
          )}
        </View>
        <Button
          colorScheme="info"
          variant="outline"
          w="full"
          onPress={handlePressBuy}
          leftIcon={
            <Icon
              as={MaterialCommunityIcons}
              name="google-play"
              size="md"
              color="info.400"
            />
          }>
          <Text fontSize="lg" fontWeight="lg" color="info.400">
            Buy this book on Google Play
          </Text>
        </Button>
        <Button
          colorScheme="success"
          w="full"
          onPress={handlePressAdd}
          leftIcon={
            <Icon
              as={MaterialIcons}
              name="playlist-add"
              size="md"
              color="white"
            />
          }>
          <Text fontSize="lg" fontWeight="lg" color="white">
            Add to my Book List
          </Text>
        </Button>
      </VStack>
    </ScrollView>
  );
};

export default BookDetail;

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
  },
});
