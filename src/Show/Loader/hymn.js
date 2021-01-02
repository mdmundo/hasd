import request from './request';

export const getHymn = async (path, dispatch) => {
  const blob = await request(path, dispatch);

  if (!blob) return '';

  const URI = window.URL.createObjectURL(blob);
  return URI;
};
