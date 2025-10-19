export default interface Book {
  id: number;
  isValidated: boolean;
  title: string;
  country: string;
  year: number;
  isbn: string;
  publisher: string;
  authors: string[];
  group: string;
}
