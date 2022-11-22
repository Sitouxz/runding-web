import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Background from '../components/Background';
import Illustration from '../assets/img/Illustration.png';

import logoImg from '../assets/img/logoImg.svg';

export default function LandingPage() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white lg:bg-transparent shadow-lg lg:shadow-none border-b-2 lg:border-none mb-3 ">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a className="flex font-bold font-logo text-[36px] " href="/">
                <img src={logoImg} alt="R" className="mr-2" />
                Runding
              </a>
              <button
                className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className="fas fa-bars" />
              </button>
            </div>
            <div
              className={
                // eslint-disable-next-line prefer-template, operator-linebreak
                'lg:flex flex-grow items-start' +
                (navbarOpen ? ' flex' : ' hidden')
              }
            >
              <ul className="flex flex-col items-start justify-center lg:flex-row list-none lg:ml-auto mt-2">
                <li className="nav-item">
                  <a
                    className="px-3 py-2 text-md font-medium leading-snug text-primary-3 lg:text-white hover:opacity-75"
                    href="#beranda"
                  >
                    Beranda
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 text-md font-medium leading-snug text-primary-3 lg:text-white hover:opacity-75"
                    href="#beranda"
                  >
                    Ruang Diskusi
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 text-md font-medium leading-snug text-primary-3 lg:text-white hover:opacity-75"
                    href="#beranda"
                  >
                    Tentang Kami
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Background />
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row text-center lg:text-start items-center justify-center lg:justify-between">
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
            <div className="mt-12">
              <Link
                to="/login"
                className="bg-primary-1 text-white font-medium text-[18px] px-10 py-3 rounded-md shadow-2xl shadow-primary-1"
              >
                Mulai Diskusi
              </Link>
            </div>
          </div>
          <img src={Illustration} alt="" className="w-96 md:w-auto" />
        </div>
      </div>
    </>
  );
}
