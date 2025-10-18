export default interface Meta {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  prevPage: number | null;
  nextPage: number | null;
}
