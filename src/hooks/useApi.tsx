import React, { useEffect, useState } from 'react';
import { fetch } from '../utils/api';

export const useApi = (endpoint: Endpoint) => {
  const [url, setUrl] = useState<string>(getQuery(endpoint));
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

type Endpoint = 'one' | 'two';
const getQuery = (endpoint: Endpoint): string => {
  switch (endpoint) {
    case 'one':
      return 'one';
    case 'two':
      return 'two';
  }
};
