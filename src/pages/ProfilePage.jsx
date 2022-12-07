import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AccessibilityPopup from '../components/AccessibilityPopup';
import Background from '../components/Background';
import Navbar from '../layouts/Navbar';
import RandomFacts from '../components/RandomFacts';
import BackgroundAccessible from '../components/BackgroundAccessible';

import avatarBig from '../assets/img/avatarBig.png';

export default function ProfilePage() {
  const [accessibility, setAccessibility] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
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
      <div className="container mx-auto lg:grid grid-rows-1 grid-cols-3 px-2 my-10">
        <div className="col-span-1 flex flex-col items-center">
          <img src={avatarBig} alt="" />
        </div>
        <div className="col-span-2">
          <h2 className="mb-4 font-semibold text-xl">Informasi Pengguna</h2>
          <button
            onClick={() => {
              navigate('/manage');
            }}
            type="button"
            className="flex justify-end items-center text-white w-[75px] h-[59px] mt-[40px] bg-primary-2 text-[15px] font-medium p-0 rounded-[17px] relative hover:shadow-primary-1 shadow-2xl"
          >
            <span className="text-center w-full">Liat Ruang Diskusimu</span>
          </button>
        </div>
        <RandomFacts />
      </div>
    </>
  );
}
