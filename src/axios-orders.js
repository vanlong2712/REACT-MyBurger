import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-long-burger.firebaseio.com/',
});

export default instance;
