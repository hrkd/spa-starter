import { useEffect, useState } from 'react';
import { fetch, Endpoint } from '../utils/api';

export const useApi = (endpoint: Endpoint) => {
  const [url] = useState<Endpoint>(endpoint);
  const [data, setData] = useState<number>(0);

  useEffect(() => {
    const doFetch = async () => {
      const result = await fetch(url);
      setData(result.data);
    };
    doFetch();
  }, [url]);

  return [data];
};
