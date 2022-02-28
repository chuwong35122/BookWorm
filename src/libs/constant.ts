export interface Genre {
  title: string;
  bgColor: string;
}

export interface GenreKey {
  [key: string]: string;
}

export const GENRES: Genre[] = [
  {title: 'Action', bgColor: '#e53935'},
  {title: 'Mystery', bgColor: '#424242'},
  {title: 'Fantasy', bgColor: '#fbc02d'},
  {title: 'Horror', bgColor: '#4a148c'},
  {title: 'Literary Fiction', bgColor: '#ab47bc'},
  {title: 'Romance', bgColor: '#ff80ab'},
  {title: 'Science Fiction', bgColor: '#ff9800'},
  {title: 'Thriller', bgColor: '#c41c00'},
  {title: 'Biography', bgColor: '#795548'},
  {title: 'History', bgColor: '#5d4037'},
  {title: 'Memoir', bgColor: '#01579b'},
  {title: 'Poetry', bgColor: '#f06292'},
  {title: 'Self-Enrichment', bgColor: '#4caf50'},
  {title: 'True Crime', bgColor: '#000'},
];

export const GENRE_KEYS: GenreKey = {
  Action: 'action',
  Mystery: 'mystery',
  Fantasy: 'fantasy',
  Horror: 'horror',
  'Literary Fiction': 'literary',
  Romance: 'romance',
  'Science Fiction': 'sci-fi',
  Thriller: 'thriller',
  Biography: 'biography',
  History: 'history',
  Memoir: 'memoir',
  Poetry: 'poetry',
  'Self-Enrichment': 'self',
  'True Crime': 'crime',
};
