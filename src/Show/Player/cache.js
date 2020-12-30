import axios from 'axios';
import {
  cacheAdapterEnhancer,
  throttleAdapterEnhancer
} from 'axios-extensions';

const http = axios.create({
  adapter: throttleAdapterEnhancer(cacheAdapterEnhancer(axios.defaults.adapter))
});

export default http;
