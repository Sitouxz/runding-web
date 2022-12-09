/* eslint-disable comma-dangle */
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
        // window.alert(
        //   `Kelas yang kamu join : \n${JSON.stringify(response.data.data)}`
        // );
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
      <AccessibilityPopup
        accessibility={accessibility}
        setAccess={setAccessibility}
      />
      <Navbar />
      {renderAccesibility()}
      <div className="container mx-auto px-2 mt-4 mb-10">
        <div className="sm:flex justify-between items-center">
          <div>
            <Link to="/profile" className="py-3">
              {'< Kembali'}
            </Link>
            <span className="text-primary-1 font-medium">
              {' '}
              | Ruang diskusiku
            </span>
          </div>
          <button
            onClick={() => {
              navigate('/create');
            }}
            type="button"
            className="w-full sm:w-auto bg-primary-1 text-neutral-200 py-2 px-10 rounded-lg shadow-lg shadow-primary-1"
          >
            <span className="text-center w-full font-medium">
              Buat Ruang Diskusi
            </span>
          </button>
        </div>
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
