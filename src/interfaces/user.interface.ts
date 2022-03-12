import {Book} from './book.interface';
export interface Account {
  email: string;
  username: string;
  password: string;
}

export interface NewAccount {
  email: string | undefined;
  username: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
}

export interface UserInfo {
  username: string;
  recent: string[]; // a string of ISBN
  read: Book[];
}
