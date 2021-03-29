import axios from 'axios';

export const fetch = (endpoint: Endpoint) => {
  return axios(getQuery(endpoint));
};

export type Endpoint = 'one' | 'two';
const getQuery = (endpoint: Endpoint): string => {
  switch (endpoint) {
    case 'one':
      return 'onee';
    case 'two':
      return 'two';
  }
};
