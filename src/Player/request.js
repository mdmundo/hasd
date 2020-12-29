import axios from 'axios';

const request = async (path) => {
  const response = await axios.get(
    'https://mdmundo.gitlab.io/hasd/sung/001.mp3' ||
      `https://f000.backblazeb2.com/file/hasd-songs/${path}`,
    { responseType: 'blob' }
  );
  return response.data;
};

export default request;
