import Meta from "./meta.interface.js";

export default interface ApiResponse<T> {
  docs: T[];
  meta: Meta;
}
