/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';

export default function AccessibilityPopup() {
  const navigate = useNavigate();
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
