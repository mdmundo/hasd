import axios from 'axios';

const request = async (path) => {
  const response = await axios.get(
    `https://f000.backblazeb2.com/file/hasd-songs/${path}`,
    { responseType: 'blob' }
  );
  return response.data;
};

export default request;
