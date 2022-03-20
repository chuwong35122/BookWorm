export interface Identifier {
  type: string;
  identifier: string;
}

export interface Volume {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description?: string;
  industryIdentifiers: Identifier[];
  pageCount: number;
  categories?: string[];
  averageRating?: number;
  imageLinks?: Thumbnail;
  language: string;
  previewLink: string;
  infoLink: string;
}

export interface Thumbnail {
  smallThumbnail: string;
  thumbnail: string;
}

export interface Price {
  amount: number;
  currencyCode: string;
}

export interface BookPrice {
  amount: number;
  currencyCode: string;
}

export interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
  listPrice: BookPrice;
  retailPrice: BookPrice;
  buyLink: string;
}

export interface Availability {
  isAvailable: boolean;
}
export interface AccessInfo {
  country: string;
  epub: Availability;
  pdf: Availability;
}

export interface Book {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: Volume;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
}

export interface BookSearch {
  kind: string;
  totalItems: number;
  items: Book[];
}
