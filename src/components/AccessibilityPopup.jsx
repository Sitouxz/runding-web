/* eslint-disable no-undef */
/* eslint-disable react/jsx-wrap-multilines */
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';

/* komponen link tersembunyi (diakses melalui focus key) untuk membuka menu aksesibilitas, dimana
   user dapat melakukan navigasi ke halaman beranda dan ruang diskusi, serta dapat melakukan
   toggle colorblind mode. Colorblind mode merupakan mode yang merubah warna yang digunakan dalam
   aplikasi dengan warna colorblind-friendly */
export default function AccessibilityPopup({ accessibility, setAccess }) {
  const navigate = useNavigate();
  let accesibilityBool = accessibility;
  const handleBackgroundAccesability = useCallback(() => {
    setAccess(!(accesibilityBool));
    accesibilityBool = !(accesibilityBool);
  }, [setAccess]);
  return (
    <Popup
      trigger={
        <button
          type="button"
          className="absolute -top-10 left-0 bg-primary-1 text-white rounded-br-lg py-2 px-4 z-50 focus:top-0 focus:outline-none focus:ring-2 focus:ring-primary-3 focus:ring-opacity-50 transition-all duration-300"
        >
          Open Accessible Navigation Menu
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="border p-2 rounded-xl shadow-md bg-white">
          <div className="border-b border-primary-1 text-center text-lg font-medium py-2">
            <span>Navigation Menu</span>
          </div>
          <div className="w-full p-2 text-center flex gap-2">
            <button
              type="button"
              className="py-2 px-3 rounded-lg bg-primary-1 text-white"
              onClick={() => {
                // console.log('going home');
                navigate('/ruang');
              }}
            >
              To Ruang Diskusi
            </button>
            <button
              type="button"
              className="py-2 px-3 rounded-lg bg-primary-1 text-white"
              onClick={() => {
                // console.log('going to landing page ');
                navigate('/');
              }}
            >
              To Landing Page
            </button>
            <button
              type="button"
              className="py-2 px-3 rounded-lg bg-primary-2 text-white"
              onClick={async () => {
                handleBackgroundAccesability();
                const colorAccess = document.body.style.getPropertyValue('--color-primary');
                if (colorAccess !== '#cc79a7') {
                  document.body.style.setProperty('--color-primary', '#cc79a7');
                  document.body.style.setProperty('--color-secondary', '#0072b2');
                  document.body.style.setProperty('--color-tertiary', '#000000');
                } else {
                  document.body.style.setProperty('--color-primary', '#5D5FEF');
                  document.body.style.setProperty('--color-secondary', '#636499');
                  document.body.style.setProperty('--color-tertiary', '#121225');
                }
              }}
            >
              Toggle Colorblind Mode
            </button>
            <button
              type="button"
              className="py-2 px-3 rounded-lg border-primary-1 border-2 text-primary-1 font-medium"
              onClick={() => {
                // console.log('modal closed ');
                close();
              }}
            >
              Close Menu
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}
