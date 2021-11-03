import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/poss",
  withCredentials: true,
  headers: {
    accept: "application/json",
  },
  params: {
    userId: 3,
    _limit: 10,
  },
});

export default instance;
