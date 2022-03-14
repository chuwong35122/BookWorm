import {Query} from '../components/molecules/BookSearchInput';

export type RootStackParamList = {
  Home: undefined;
  NewBook: {genre: string};
  SearchBook: {
    q: Query;
    setQ: (val: Query) => void;
    search: string;
    setSearch: (val: string) => void;
  };
  Auth: undefined;
  EmailSignUp: undefined;
};
