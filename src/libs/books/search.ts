import axios from 'axios';
import {Query} from '../../components/molecules/BookSearchInput';
import {BookSearch} from './book.interface';

export async function searchBookByQ(
  q: Query,
  value: string,
): Promise<BookSearch> {
  //     https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
  // const result = await axios.get(
  //   `${process.env.GCP_BOOK_VOLUME_SEARCH_BASEURL}${value}${q}:keyes&key=${process.env.GCP_APIKEY}`,
  // );
  const result = await axios.get(
    'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyC-KiwCLl8wc7Y6PczO1Mkg3lDf9WT2cTI',
  );

  return result.data as BookSearch;
}
