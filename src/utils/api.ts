import axios from 'axios';

export const fetch = (endpoint: Endpoint) =>
  axios(process.env.REACT_APP_API_URL + getQuery(endpoint));

export type Endpoint = 'works';
const getQuery = (endpoint: Endpoint): string => {
  switch (endpoint) {
    case 'works':
      return '/works';
  }
};
