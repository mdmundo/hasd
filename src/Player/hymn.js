import request from './request';

export const getHymn = async (path) => {
  const blob = await request(path);
  const URI = window.URL.createObjectURL(blob);
  return URI;
};
