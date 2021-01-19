import localforage from 'localforage';

export const favorites = localforage.createInstance({
  name: 'HASD',
  storeName: 'favorites',
  description: 'Hinos Favoritos'
});

export const hymnal = localforage.createInstance({
  name: 'HASD',
  storeName: 'hymnal',
  description: 'Hinos Baixados'
});
