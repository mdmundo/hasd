import localforage from './storage';

export const getFavorites = async () => {
  const favorites = await localforage.getItem('favorites');

  return favorites || [];
};
