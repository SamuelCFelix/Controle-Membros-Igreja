import axios from "axios";
import { API_HOST } from "../variaveis-export";

const api = axios.create({
  baseURL: API_HOST,
});

export default api;
