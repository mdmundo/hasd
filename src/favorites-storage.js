import localforage from 'localforage';

const instance = localforage.createInstance({
  name: 'HASD',
  storeName: 'favorites',
  description: 'Hinos Favoritos'
});

export default instance;
