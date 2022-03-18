import {Book} from '../libs/books/book.interface';

export type RootStackParamList = {
  Home: undefined;
  NewBook: {genre: string};
  SearchBook: undefined;
  BookDetail: Book;
  Auth: undefined;
  EmailSignUp: undefined;
};
