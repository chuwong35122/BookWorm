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
