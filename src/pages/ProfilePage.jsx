import React, { useState, useEffect } from 'react';

import AccessibilityPopup from '../components/AccessibilityPopup';
import Background from '../components/Background';
import Navbar from '../layouts/Navbar';
import RandomFacts from '../components/RandomFacts';
import BackgroundAccessible from '../components/BackgroundAccessible';

import avatarBig from '../assets/img/avatarBig.png';

export default function ProfilePage() {
  const [accessibility, setAccessibility] = useState(false);

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
          <button
            type="button"
            className="my-4 rounded-md bg-primary-1 py-2 px-4 text-sm font-semibold text-white hover:bg-primary-2"
          >
            Ganti foto profile
          </button>
        </div>
        <div className="col-span-2">
          <h2 className="mb-4 font-semibold text-xl">Informasi Pengguna</h2>
          <div className="flex flex-col w-full mb-5">
            <label htmlFor="username" className="font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value="John Doe"
              className="flex-grow rounded-lg border-2 border-primary-1 py-1 px-2"
            />
          </div>
          <div className="flex flex-col w-full mb-5">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value="johndoe@gmail.com"
              className="flex-grow rounded-lg border-2 border-primary-1 py-1 px-2"
            />
          </div>
          <h2 className="mb-4 font-semibold text-md">
            Isi jika ingin mengubah password anda
          </h2>
          <div className="flex flex-col w-full mb-5">
            <label htmlFor="password" className="font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="*******"
              className="flex-grow rounded-lg border-2 border-primary-1 py-1 px-2"
            />
          </div>
          <div className="flex flex-col w-full mb-5">
            <label htmlFor="confirmPassword" className="font-medium">
              Confirm password
            </label>
            <input
              type="confirmPassword"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="*******"
              className="flex-grow rounded-lg border-2 border-primary-1 py-1 px-2"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="shadow-lg shadow-primary-1 py-2 px-6 sm:px-10 bg-primary-1 rounded-md mt-2 lg:mt-0 text-white"
            >
              Simpan
            </button>
          </div>
        </div>
        <RandomFacts />
      </div>
    </>
  );
}
