import Meta from "./meta.interface";

export default interface ApiResponse<T> {
  docs: T[];
  meta: Meta;
}
