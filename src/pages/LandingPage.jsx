import React from 'react';

import Navbar from '../layouts/Navbar';
import ellipse from '../assets/img/Ellipse.svg';
import ellipse2 from '../assets/img/Ellipse-1.svg';
import ellipse3 from '../assets/img/Ellipse-2.svg';
import Illustration from '../assets/img/Illustration.png';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <img
        src={ellipse}
        alt=""
        className="absolute top-0 right-0 -z-10 w-[200px] md:w-[300px] lg:w-[400px] xl:w-[700px]"
      />
      <img src={ellipse2} alt="" className="absolute top-96 left-0 -z-10" />
      <img src={ellipse3} alt="" className="absolute bottom-10 right-0 -z-10" />

      <img src="" alt="" />
      <nav className="relative flex items-center justify-between px-2 py-3 mb-3">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row text-center lg:text-start items-center justify-center lg:justify-between">
          <div>
            <span className="font-medium text-primary-1 text-[18px]">
              Halo, Selamat Datang
            </span>
            <h1 className="font-bold text-[40px] leading-tight">
              Temukan solusi
              <br />
              permasalahan belajarmu
            </h1>
            <p className="font-regular mt-2 text-[18px] text-primary-2">
              Mulailah membuka diskusi untuk
              <br />
              menyelesaikan permasalahan belajarmu
            </p>

            <button
              type="button"
              className="bg-primary-1 text-white font-medium text-[18px] px-10 py-3 rounded-md mt-12 shadow-2xl shadow-primary-1"
            >
              Mulai Diskusi
            </button>
          </div>
          <img src={Illustration} alt="" className="w-96 md:w-auto" />
        </div>
      </nav>
    </>
  );
}
