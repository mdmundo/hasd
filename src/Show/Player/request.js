import axios from './cache';

const request = async (path, dispatch) => {
  const response = await axios.get(
    `https://f000.backblazeb2.com/file/hasd-songs/${path}`,
    {
      responseType: 'blob',
      onDownloadProgress: (progressEvent) => {
        dispatch({
          type: 'UPDATE_DOWNLOAD_PROGRESS',
          progress: (progressEvent.loaded * 100) / progressEvent.total
        });
      }
    }
  );
  return response.data;
};

export default request;
