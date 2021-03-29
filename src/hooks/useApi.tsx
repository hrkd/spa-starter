import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const useApi = (endpoint: string) => {
  const [url, setUrl] = useState<string>(endpoint);
  const [data, setData] = useState<number>(0);

  useEffect(() => {
    const fetch = async () => {
      const result = await axios('');
      setData(result.data);
    };
  }, [url]);

  return [data];
};
