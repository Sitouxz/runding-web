import React, { useState, useEffect } from 'react';

import AccessibilityPopup from '../components/AccessibilityPopup';
import Navbar from '../layouts/Navbar';
import Background from '../components/Background';
import BackgroundAccessible from '../components/BackgroundAccessible';

import avatarBig from '../assets/img/avatarBig.png';

export default function CreateGroup() {
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
      <div className="container mx-auto px-2 mt-4 mb-10">
        <a href="/ruang" className="py-3">
          {'< Kembali'}
        </a>
        <div className="flex flex-col justify-center items-center gap-3 w-full mt-3">
          <img src={avatarBig} alt="" />
          <button
            type="button"
            className="bg-primary-1 text-white py-2 px-10 rounded-lg shadow-lg shadow-primary-1"
          >
            Tambah foto
          </button>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <label htmlFor="name" className="font-semibold text-lg">
            Subjek Grup
            <span className="font-normal text-sm text-red-500 ml-1">
              *pastikan anda menuliskan subjek grup dengan benar, sebagai contoh
              = Komunitas Grup Phyton
            </span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border border-primary-1 rounded-md py-2 px-3 filter backdrop-blur-md bg-transparent"
          />
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <label htmlFor="name" className="font-semibold text-lg">
            Deskripsi grup
            <span className="font-normal text-sm text-red-500 ml-1">
              *tuliskan secara jelas kegunaan grup yang akan Anda buat
            </span>
          </label>
          <textarea
            name=""
            id=""
            cols="20"
            rows="10"
            className="border-primary-1 border rounded-lg w-full p-3 h-40 resize-none filter backdrop-blur-md bg-transparent"
          />
        </div>
        <div className="flex justify-end gap-3 mt-3">
          <button
            type="button"
            className="bg-primary-1 text-white py-2 px-10 rounded-lg shadow-lg shadow-primary-1"
          >
            Buat Grup
          </button>
        </div>
      </div>
    </>
  );
}
