import axios from "axios";

const instance = axios.create({
  baseURL: "https://aracquine-rec.herokuapp.com/",
});

export default instance;
