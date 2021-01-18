import localforage from '../../favorites-storage';

export const setFavorite = async (newFavorite) => {
  const favorites = await localforage.getItem('favorites');

  if (favorites !== null) {
    favorites.push(newFavorite);
    await localforage.setItem('favorites', Array.from(new Set(favorites)));
  } else {
    await localforage.setItem('favorites', [newFavorite]);
  }
};
