import React, { useEffect, useState } from 'react';
import Axios from 'axios';

interface Props{
    code: string
}

interface DataProp {
    accessToken: string,
    refreshToken: string,
    expiresIn: number
}

export const useAuth:(code :String) => string = (code :String) => {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [expiresIn, setExpiresIn] = useState(0);

  useEffect(() => {
    Axios.post<DataProp>('https://spotify-web-server.herokuapp.com/login', {
      code,
    }).then((res) => {
      window.history.pushState({}, '', '/');
      setAccessToken(res.data.accessToken);
      setRefreshToken(res.data.refreshToken);
      setExpiresIn(res.data.expiresIn);
    //   console.log(res.data.accessToken);
    //   console.log(res.data);
    }).catch(() => {
    });
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const interval = setInterval(() => {
      Axios.post<DataProp>('https://spotify-web-server.herokuapp.com/refresh', {
        refreshToken,
      }).then((res) => {
        //   window.history.pushState({}, '', '/');
        setAccessToken(res.data.accessToken);
        //   setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
      }).catch(() => {
      });
    }, (expiresIn - 60) * 1000);

    clearInterval(interval);
  }, [refreshToken, expiresIn]);

  return accessToken;
};
