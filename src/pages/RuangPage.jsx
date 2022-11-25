/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-else-return */
import React, { useState, useEffect } from 'react';

import api from '../config/api';

import Background from '../components/Background';

export default function RuangPage() {
  const [ruangData, setRuangData] = useState([]);

  const DisplayHandler = async () => {
    const token = await localStorage.getItem('token');
    await api
      .get('/runding', {
        headers: {
          'auth-token': token, // the token is a variable which holds the token
        },
      })
      .then((response) => {
        console.log(response.data);
        setRuangData(response.data);
        console.log(ruangData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    DisplayHandler();
  }, []);

  return (
    <>
      <Background />
      <div>
        <p>Kelas-Kelas :</p>
        <div />
      </div>
    </>
  );
}
