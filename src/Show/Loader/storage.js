import localforage from 'localforage';

const instance = localforage.createInstance({
  name: 'HASD',
  storeName: 'hymnal',
  description: 'Hinos Baixados'
});

export default instance;
