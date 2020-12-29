import axios from 'axios';

const request = async (path) => {
  const response = await axios.get(
    `https://gitlab.com/mdmundo/hasd/-/raw/master/public/${path}`,
    { responseType: 'blob' }
  );
  return response.data;
};

export default request;
