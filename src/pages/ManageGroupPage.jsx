import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../config/api';

import AccessibilityPopup from '../components/AccessibilityPopup';
import Navbar from '../layouts/Navbar';
import Background from '../components/Background';
import BackgroundAccessible from '../components/BackgroundAccessible';

import MyGroupCard from '../components/MyGroupCard';

export default function ManageGroupPage() {
  const [accessibility, setAccessibility] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    api
      .get('/runding/joined', {
        headers: {
          'auth-token': token, // the token is a variable which holds the token
        },
      })
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response.data);
        // eslint-disable-next-line no-alert
        window.alert(`Kelas yang kamu join : \n${JSON.stringify(response.data.data)}`);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
    document.body.style.setProperty('--color-primary', '#5D5FEF');
    document.body.style.setProperty('--color-secondary', '#636499');
    document.body.style.setProperty('--color-tertiary', '#121225');
  }, []);

  const renderAccesibility = () => {
    if (accessibility) {
      return <BackgroundAccessible noBig />;
    }
    return <Background noBig />;
  };

  return (
    <>
      <AccessibilityPopup accessibility={accessibility} setAccess={setAccessibility} />
      <Navbar />
      {renderAccesibility()}
      <div className="container mx-auto px-2 mt-4 mb-10">
        <a href="/profile" className="py-3">
          {'< Kembali'}
        </a>
        <span className="text-primary-1 font-medium"> | Ruang diskusiku</span>
        <button
          onClick={() => {
            navigate('/create');
          }}
          type="button"
          className="flex justify-end items-center text-white w-[75px] h-[59px] mt-[40px] bg-primary-2 text-[15px] font-medium p-0 rounded-[17px] relative hover:shadow-primary-1 shadow-2xl"
        >
          <span className="text-center w-full">Buat Ruang Diskusi</span>
        </button>
        <div>
          <MyGroupCard />
          <MyGroupCard />
          <MyGroupCard />
          <MyGroupCard />
        </div>
      </div>
    </>
  );
}
