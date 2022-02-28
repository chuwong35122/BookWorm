import EncryptedStorage from 'react-native-encrypted-storage';
import {GENRES, GENRE_KEYS} from './constant';

/**
 * This function prepares every genre of books when use first open to the app.
 */
export async function initializeData() {
  const isFirstTime = await EncryptedStorage.getItem('isFirstTime');
  if (isFirstTime !== undefined) {
    return;
  } else {
    await EncryptedStorage.setItem('action', JSON.stringify([]));
    await EncryptedStorage.setItem('mystery', JSON.stringify([]));
    await EncryptedStorage.setItem('fantasy', JSON.stringify([]));
    await EncryptedStorage.setItem('literary', JSON.stringify([]));
    await EncryptedStorage.setItem('romance', JSON.stringify([]));
    await EncryptedStorage.setItem('sci-fi', JSON.stringify([]));
    await EncryptedStorage.setItem('thriller', JSON.stringify([]));
    await EncryptedStorage.setItem('biography', JSON.stringify([]));
    await EncryptedStorage.setItem('history', JSON.stringify([]));
    await EncryptedStorage.setItem('memoir', JSON.stringify([]));
    await EncryptedStorage.setItem('self', JSON.stringify([]));
    await EncryptedStorage.setItem('crime', JSON.stringify([]));

    await EncryptedStorage.setItem('isFirstTime', JSON.stringify(true));
  }
}

export async function getBooksByGenre(key: string) {
  //   const result = await EncryptedStorage.getItem(key);
  //   return result ? JSON.parse(result) : [];
  return [];
}

// export async function storeData(key: Keys) {
//   try {
//     await EncryptedStorage.setItem(
//       'user_session',
//       JSON.stringify({
//         age: 21,
//         token: 'ACCESS_TOKEN',
//         username: 'emeraldsanto',
//         languages: ['fr', 'en', 'de'],
//       }),
//     );

//     // Congrats! You've just stored your first value!
//   } catch (error) {
//     // There was an error on the native side
//   }
// }
