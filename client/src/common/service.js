import axios from 'axios';
import qs from 'qs';
import constants from './constants';
import logger from './logger';

class Service {
  constructor() {
    const token = typeof localStorage !== 'undefined' ? localStorage.getItem('csrf') : '';
    const client = axios.create({
      baseURL: constants.common.API.url,
      headers: {
        csrf: token || null
      },
      timeout: constants.common.API.requestTimeout
    });
    client.interceptors.response.use(this.onSuccess, this.onFailure);
  }

  updateToken(token) {
    this.client.defaults.headers.csrf = token;
  }

  static onSuccess(response) {
    logger.debug('Success', response);
    return response.data;
  }

  static onFailure(error) {
    logger.error('Failed', error.config);

    if (error.response) {
      logger.error('Status', error.response.status);
      logger.error('Data', error.response.data);
      logger.error('Headers', error.response.headers);
    } else if (error.request) {
      logger.log(error.request);
    } else {
      logger.error('Error ', error.message);
    }

    return Promise.reject(error.response || error.message);
  }

  request(options) {
    return this.client(options);
  }

  get(url, options = {}) {
    return this.client.get(url, options);
  }

  post(url, payload, options = {}) {
    return this.client.post(url, payload, options);
  }

  put(url, payload, options = {}) {
    return this.client.put(url, payload, options);
  }

  patch(url, payload, options = {}) {
    return this.client.patch(url, payload, options);
  }

  delete(url, options = {}) {
    return this.client.delete(url, options);
  }
}

const service = new Service();
export default service;
