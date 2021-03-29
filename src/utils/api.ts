import axios from 'axios';

export const fetch = (endpoint: string) => {
  return axios(endpoint);
};
