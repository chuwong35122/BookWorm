import axios from 'axios';
import {Query} from '../../components/molecules/BookSearchInput';
import {Book, BookSearch} from './book.interface';

export async function searchBookByTitle(value: string): Promise<Book[]> {
  const result = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${value}&key=${process.env.GCP_APIKEY}`,
  );

  const bookResult = result.data as BookSearch;
  return bookResult.items;
}

// const result = await axios.get(
//   `https://www.googleapis.com/books/v1/volumes?q=${value}+${q}&key=${process.env.GCP_APIKEY}`,
// );
// Filter out non-e-book books.
// const filteredResult = bookResult.items.filter(item => {
//   return (
//     item.accessInfo.epub.isAvailable === true ||
//     item.accessInfo.pdf.isAvailable === true ||
//     item.volumeInfo.imageLinks
//   );
// });

// https://www.googleapis.com/books/v1/volumes?q=search+terms

// return filteredResult;
