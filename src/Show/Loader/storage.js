import localforage from 'localforage';

const instance = localforage.createInstance({
  name: 'HASD',
  storeName: 'hinario',
  description: 'Hinário Adventista do Sétimo Dia'
});

export default instance;
