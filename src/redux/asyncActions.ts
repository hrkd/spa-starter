import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

const config = (): AxiosRequestConfig => {
  return {
    headers: {
      ['content-type']: 'application/json',
      Authorization: `Bearer ${Cookies.get('token')}`,
    },
  };
};

export const login = createAsyncThunk('app/login', async (data: any) => {
  const res = await axios.post(
    process.env.REACT_APP_API_URL + '/sign_in',
    {
      id_token: data.idToken,
      provider: data.provider,
      provider_secret: data.providerSecret,
      provider_token: data.providerToken,
    },
    config()
  );

  Cookies.set('token', res.data.token);
  const overViewRes = await axios.get(process.env.REACT_APP_API_URL + '/overview', config());

  if (res && overViewRes) {
    return {
      overview: overViewRes.data,
      provider: data.provider,
    };
  }
});
