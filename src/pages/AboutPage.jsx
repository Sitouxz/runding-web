import React from 'react';

import AccessibilityPopup from '../components/AccessibilityPopup';
import Navbar from '../layouts/Navbar';
import Background from '../components/Background';
import avatar from '../assets/img/avatar.png';

export default function AboutPage() {
  return (
    <>
      <AccessibilityPopup />
      <Navbar />
      <Background noBig />
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
              <img src={avatar} alt="avatar" />
              <span className="font-medium mt-3">Tristan</span>
            </div>
            <div className="flex flex-col justify-center items-center border-2 rounded-lg py-4 px-10 shadow-lg filter backdrop-blur-xl">
              <img src={avatar} alt="avatar" />
              <span className="font-medium mt-3">Lara</span>
            </div>
            <div className="flex flex-col justify-center items-center border-2 rounded-lg py-4 px-10 shadow-lg filter backdrop-blur-xl">
              <img src={avatar} alt="avatar" />
              <span className="font-medium mt-3">Tria</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
