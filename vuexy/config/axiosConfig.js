import axios from "axios";

const adminInfo = JSON.parse(localStorage.getItem("token"))


export const httpFile = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `Bearer ${adminInfo?.token}`,

    "Content-Type": "multipart/form-data",
    // secret_key: "cPjkCvGYciR2e8Y6hlBa0C3XGQ==",
    // publish_key: "FoLsVGxZsUBsTnyr0QNwQuWbew==",
  },
});