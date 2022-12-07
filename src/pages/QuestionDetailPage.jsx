import React, { useState, useEffect } from 'react';

import AccessibilityPopup from '../components/AccessibilityPopup';
import Navbar from '../layouts/Navbar';
import Background from '../components/Background';
import BackgroundAccessible from '../components/BackgroundAccessible';

import avatar from '../assets/img/avatar.png';

import QuestionResponseCard from '../components/QuestionResponseCard';

export default function QuestionDetailPage() {
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
        <a href="/quest" className="py-3">
          {'< Kembali'}
        </a>
        <div className="mt-3 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-3 w-full ">
          <div className="w-24 flex justify-center items-center">
            <img src={avatar} alt="" />
          </div>
          <div className="flex-grow flex flex-col justify-center items-center lg:items-start lg:block">
            <h3 className="font-semibold mb-2 text-xl">John Doe</h3>
            <div className="flex items-center mb-1">
              <i className="fa-solid fa-clock mr-3 w-5 h-5 flex justify-center items-center text-xl text-primary-1" />
              <span className=" font-medium text-gray-500">
                1 Jam yang lalu
              </span>
            </div>
            <div className="flex items-center mb-1">
              <i className="fa-solid fa-message mr-3 w-5 h-5 flex justify-center items-center text-xl text-primary-1" />
              <span className="font-medium text-gray-500">7 Pembahasan</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-b border-primary-1 pb-3 justify-between items-center lg:items-start mt-3 ">
          <div className=" mt-3 lg:mt-0 text-center lg:text-start">
            <h3 className="font-semibold text-xl mb-3">
              Kendala dalam menampilkan gambar pada css
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
              voluptas facilis itaque culpa, in neque temporibus quasi amet quas
              quisquam?
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <span className="py-1 px-3 bg-primary-1 rounded-md text-white">
                css
              </span>
              <span className="py-1 px-3 bg-primary-1 rounded-md text-white">
                image
              </span>
              <span className="py-1 px-3 bg-primary-1 rounded-md text-white">
                error
              </span>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex items-center gap-3">
            <img src={avatar} alt="" className="w-10 h-10" />
            <span className="font-semibold">John Doe</span>
          </div>
          <div className="border-b border-primary-1 pb-3">
            <textarea
              name=""
              id=""
              cols="20"
              rows="10"
              className="border-primary-1 border rounded-lg w-full p-3 mt-3 h-40 resize-none"
            />
            <button
              type="button"
              className="bg-primary-1 text-white py-2 px-10 rounded-lg mt-3 shadow-lg shadow-primary-1"
            >
              Kirim
            </button>
          </div>
        </div>
        <div className="mt-3">
          <QuestionResponseCard />
          <QuestionResponseCard />
        </div>
      </div>
    </>
  );
}
