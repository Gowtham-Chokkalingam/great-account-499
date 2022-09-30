import axios from "axios";

export const getData = () => {
    return axios.get(`http://localhost:8080/signup`);
  };