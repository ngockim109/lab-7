import axios from "axios";
const api = axios.create({
  baseURL: "https://6548a3afdd8ebcd4ab234c0a.mockapi.io/api/v1",
});

export default api;
