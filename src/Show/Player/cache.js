import axios from 'axios';
import {
  cacheAdapterEnhancer,
  throttleAdapterEnhancer
} from 'axios-extensions';
import LRUCache from 'lru-cache';

const http = axios.create({
  adapter: throttleAdapterEnhancer(
    cacheAdapterEnhancer(axios.defaults.adapter, {
      defaultCache: new LRUCache({ maxAge: 86400000, max: 0 })
    })
  )
});

export default http;
