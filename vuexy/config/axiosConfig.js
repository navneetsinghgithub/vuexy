import axios from "axios";


export const httpFile = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    // secret_key: "cPjkCvGYciR2e8Y6hlBa0C3XGQ==",
    // publish_key: "FoLsVGxZsUBsTnyr0QNwQuWbew==",
  },
});