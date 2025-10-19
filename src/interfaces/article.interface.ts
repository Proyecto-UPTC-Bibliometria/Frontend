export default interface Article {
  id: number;
  isValidated: boolean;
  title: string;
  country: string;
  journal: string;
  issn: string;
  year: number;
  volume: string;
  issue: string;
  pages: string;
  doi: string;
  authors: string[];
  group: string;
}
