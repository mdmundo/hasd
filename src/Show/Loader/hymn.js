import { hymnal } from '../../storage';
import request from './request';

export const getHymn = async (path, dispatch) => {
  try {
    let blob;
    blob = await hymnal.getItem(path);

    if (blob === null) {
      blob = await request(path, dispatch);

      if (!blob) throw new Error('');

      await hymnal.setItem(path, blob);
    }

    if (!blob) throw new Error('');

    const URI = window.URL.createObjectURL(blob);
    return URI;
  } catch (error) {
    return '';
  }
};
