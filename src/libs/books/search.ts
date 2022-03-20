import axios from 'axios';
import {Query} from '../../components/molecules/BookSearchInput';
import {BookSearch} from './book.interface';

export async function searchBookByQ(
  q: Query,
  value: string,
): Promise<BookSearch> {
  // https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey

  const result = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${value}+${'intitle'}:keyes&key=${
      process.env.GCP_APIKEY
    }`,
  );

  const bookResult = result.data as BookSearch;
  console.log(bookResult.items[0]);

  // https://www.googleapis.com/books/v1/volumes?q=search+terms

  return result.data as BookSearch;
}
