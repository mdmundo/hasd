import { favorites as storage } from '../../storage';

export const setFavorite = async (newFavorite) => {
  const favorites = await storage.getItem('favorites');

  if (favorites !== null && Array.isArray(favorites)) {
    favorites.push(newFavorite);
    await storage.setItem('favorites', Array.from(new Set(favorites)));
  } else {
    await storage.setItem('favorites', [newFavorite]);
  }
};
