import { BRAVENEWCOIN_URL_API, BRAVENEWCOIN_X_RAPIDAPI_HOST, BRAVENEWCOIN_X_RAPIDAPI_KEY } from '../config/const';
/* Defined Endpoints */
import endpoints from '../config/endpoints';

const apiHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: '',
  'x-rapidapi-host': BRAVENEWCOIN_X_RAPIDAPI_HOST,
  'x-rapidapi-key':  BRAVENEWCOIN_X_RAPIDAPI_KEY,
};

const fetchParams = (method, data = '') => {
  const body = data ? { body: JSON.stringify(data) } : {};

  return {
    method,
    headers: apiHeaders,
    credentials: 'same-origin',
    ...body,
  };
};

export const apiCrypto = {
  prices: async coin => {
    try {
      const response = await fetch(`${BRAVENEWCOIN_URL_API}${endpoints.bravenewcoin.prices}?coin=${coin}`, fetchParams('GET'));
      if (!response.ok || response.status === 404 || response.status === 403 || response.status === 409 || response.status === 500 ) {
        const data = await response.json();
        if (typeof data.error !== 'undefined') {
          return data.error;
        }
        if (typeof data.message !== 'undefined') {
          return data.message;
        }
        return response.statusText;
      }
      const data = await response.json();
      if (typeof data.error !== 'undefined') {
        return data.error;
      }
      return data;
    } catch (error) {
      return error;
    }
  },
  convert: async (qty, from, to) => {
    try {
      const response = await fetch(`${BRAVENEWCOIN_URL_API}${endpoints.bravenewcoin.convert}?qty=${qty}&from=${from}&to=${to}`, fetchParams('GET'));
      if (!response.ok || response.status === 403 || response.status === 404 || response.status === 409 || response.status === 500 ) {
        const data = await response.json();
        if (typeof data.error !== 'undefined') {
          return data.error;
        }
        if (typeof data.message !== 'undefined') {
          return data.message;
        }
        return response.statusText;
      }
      const data = await response.json();
      if (typeof data.error !== 'undefined') {
        return data.error;
      }
      return data;
    } catch (error) {
      return error;
    }
  }
};

export default apiCrypto;
