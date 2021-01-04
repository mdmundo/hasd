import axios from 'axios';

const request = async (path, dispatch) => {
  try {
    const response = await axios.get(
      `https://f000.backblazeb2.com/file/hasd-songs/${path}`,
      {
        responseType: 'blob',
        onDownloadProgress: (progressEvent) => {
          dispatch({
            type: 'UPDATE',
            update: {
              progress: (progressEvent.loaded * 100) / progressEvent.total
            }
          });
        }
      }
    );
    return response.data;
  } catch (e) {
    return undefined;
  }
};

export default request;

// {
//   code: "not_found",
//   message: "File with such name does not exist.",
//   status: 404
// }
// {
//   code: "download_cap_exceeded",
//   message: "Cannot download file, download bandwidth or transaction (Class B) cap exceeded. See the Caps & Alerts page to increase your cap.",
//   status: 403
// }
