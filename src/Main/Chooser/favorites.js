import { favorites as storage } from '../../storage';

export const getFavorites = async () => {
  const favorites = await storage.getItem('favorites');

  return favorites || [];
};
