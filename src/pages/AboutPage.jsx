/* eslint-disable no-console */
/* eslint-disable no-else-return */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Background from '../components/Background';

export default function AboutPage() {
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
        <p>Anggota project kami :</p>
        <ul>
          <li>- Owen</li>
          <li>- Tristan</li>
          <li>- Tria</li>
          <li>- Lara</li>
        </ul>
        <a href="/">Kembali ke Halaman Utama</a>
      </div>
    </>
  );
}
