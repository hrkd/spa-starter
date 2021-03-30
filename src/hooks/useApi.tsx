import { useEffect, useState } from 'react';
import { fetch, Endpoint } from '../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoading } from '../redux/index';

export const useApi = (endpoint: Endpoint) => {
  const [url] = useState<Endpoint>(endpoint);
  const [data, setData] = useState<[any]>();
  const dispatch = useDispatch();

  useEffect(() => {
    const doFetch = async () => {
      dispatch(toggleLoading(true));
      try {
        const result = await fetch(url);
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
      dispatch(toggleLoading(false));
    };
    doFetch();
  }, [url]);

  return [data];
};
