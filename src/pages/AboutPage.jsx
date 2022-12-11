import React, { useEffect, useState } from 'react';

import AccessibilityPopup from '../components/AccessibilityPopup';
import Navbar from '../layouts/Navbar';
import Background from '../components/Background';
import avatar from '../assets/img/avatar.png';
import iconTristan from '../assets/img/icon_tristan_94x94.png';
import iconTriadi from '../assets/img/icon_tria_94x94.png';
import iconLara from '../assets/img/icon_lara_94x94.png';
import BackgroundAccessible from '../components/BackgroundAccessible';

export default function AboutPage() {
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
      <div className="container mx-auto px-2">
        <div className="mb-5 lg:w-1/2">
          <h1 className="text-3xl font-semibold mb-3">Apa itu Runding</h1>
          <p>
            Ruangan Diskusi dan Bimbingan (Runding) merupakan sebuah media untuk
            bertukar pikiran secara online dimana orang dari bebrbagai kalangan
            dapat memasukkan suatu topik atau membuka ruang virtual untuk
            memulai percakapan dalam bentuk pesan yang diposting.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-3">Tim kami</h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 lg:gap-10">
            <div className="flex flex-col justify-center items-center border-2 rounded-lg py-4 px-10 shadow-lg filter backdrop-blur-xl">
              <img src={avatar} alt="avatar" />
              <span className="font-medium mt-3">Owen</span>
            </div>
            <div className="flex flex-col justify-center items-center border-2 rounded-lg py-4 px-10 shadow-lg filter backdrop-blur-xl">
              <img src={iconTristan} alt="avatar" />
              <span className="font-medium mt-3">Tristan</span>
            </div>
            <div className="flex flex-col justify-center items-center border-2 rounded-lg py-4 px-10 shadow-lg filter backdrop-blur-xl">
              <img src={iconLara} alt="avatar" />
              <span className="font-medium mt-3">Lara</span>
            </div>
            <div className="flex flex-col justify-center items-center border-2 rounded-lg py-4 px-10 shadow-lg filter backdrop-blur-xl">
              <img src={iconTriadi} alt="avatar" />
              <span className="font-medium mt-3">Tria</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
