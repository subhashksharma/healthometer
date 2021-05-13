import axios from 'axios';

const baseDomain = 'http://localhost:8080/s';
const baseURL = `${baseDomain}`;

// ALL DEFUALT CONFIGURATION HERE
export default axios.create({
  baseURL,
  headers: {
    // "Authorization": "Bearer xxxxx"
  },
});
