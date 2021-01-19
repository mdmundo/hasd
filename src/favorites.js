import { favorites as storage } from './storage';

export const setFavorite = async (item, isFavorite) => {
  const favorites = await storage.getItem('favorites');

  if (isFavorite) {
    await storage.setItem(
      'favorites',
      favorites.filter((favorite) => favorite !== item)
    );
  } else {
    if (favorites !== null && Array.isArray(favorites)) {
      favorites.push(item);
      await storage.setItem('favorites', Array.from(new Set(favorites)));
    } else {
      await storage.setItem('favorites', [item]);
    }
  }
};

export const getFavorites = async () => {
  const favorites = await storage.getItem('favorites');

  return favorites || [];
};
