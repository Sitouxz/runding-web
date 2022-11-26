/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-else-return */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';

import api from '../config/api';

import Background from '../components/Background';

export default function RuangPage() {
  // const [ruangData, setRuangData] = useState([]);

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
        // setRuangData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    DisplayHandler();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Background />
      <div>
        <Popup
          trigger={<button type="button" className="button skip-link"> Open Accessible Navigation Menu </button>}
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <button type="button" className="close" onClick={close}>
                &times;
              </button>
              <div className="header"> Navigation Menu </div>
              <div className="content">
                {' '}
                <br />
              </div>
              <div className="actions">
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    console.log('going home');
                    navigate('/home');
                  }}
                >
                  To Home
                </button>
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    console.log('going to landing page ');
                    navigate('/');
                  }}
                >
                  To Landing Page
                </button>
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    console.log('modal closed ');
                    close();
                  }}
                >
                  Close Menu
                </button>
              </div>
            </div>
          )}
        </Popup>
        <p>Kelas/Ruang Diskusi:</p>
        <a href="/">Kembali ke Halaman Utama</a>
      </div>
    </>
  );
}
