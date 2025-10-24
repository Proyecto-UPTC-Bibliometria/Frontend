import axios from "axios";
import { EnvConfig } from "./env.config";

const env = EnvConfig();

export const api = axios.create({ baseURL: env.api_url });

api.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  }
);
