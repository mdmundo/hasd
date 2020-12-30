import axios from 'axios';

const request = async (path) => {
  const response = await axios.get(
    `https://f000.backblazeb2.com/file/hasd-songs/${path}`,
    {
      responseType: 'blob',
      onDownloadProgress: (progressEvent) => {
        console.log((progressEvent.loaded * 100) / progressEvent.total);
      }
    }
  );
  return response.data;
};

export default request;
