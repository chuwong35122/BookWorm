export interface Book {
  isbn: string;
  status: 'reading' | 'wishlist' | 'finished';
  memo: Memo[];
}

export interface Memo {
  title: string;
  note: string;
}
