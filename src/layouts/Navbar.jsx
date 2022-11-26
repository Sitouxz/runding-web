import React, { useState } from 'react';

import logoImg from '../assets/img/logoImg.svg';
import avatar from '../assets/img/avatar.png';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="relative flex flex-wrap items-center justify-between bg-white shadow-lg lg:shadow-none border-b-2 mb-3 ">
      <div className="container mx-auto px-2 py-2">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a className="flex font-bold font-logo text-[36px] " href="/">
              <img src={logoImg} alt="R" className="mr-2" />
              Runding
            </a>
            <button
              className="text-black cursor-pointer text-xl leading-none  py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars" />
            </button>
          </div>
          <div
            className={
              // eslint-disable-next-line prefer-template, operator-linebreak
              'flex-col-reverse lg:flex-row lg:flex flex-grow items-start lg:items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
          >
            <ul className="flex flex-col-reverse justify-center lg:items-center lg:flex-row list-none lg:ml-auto w-full lg:w-auto">
              <li className="flex">
                <a
                  className="w-full py-3 lg:mr-3 px-1 text-lg font-medium leading-snug text-primary-3 hover:bg-slate-200"
                  href="/home"
                >
                  Beranda
                </a>
              </li>
              <li className="flex">
                <a
                  className="w-full py-3 lg:mr-3 px-1 text-lg font-medium leading-snug text-primary-3 hover:bg-slate-200"
                  href="#beranda"
                >
                  Ruang Diskusi
                </a>
              </li>
              <li className="flex">
                <a
                  className="px-3 py-2 text-md font-medium leading-snug text-primary-3 lg:text-white hover:opacity-75"
                  href="/about"
                >
                  Tentang Kami
                </a>
              </li>
            </ul>
            <div className="w-full lg:w-auto flex justify-between items-center gap-2 border-b-2 lg:border-none">
              <a
                className="flex items-center gap-3 py-2 text-md font-medium leading-snug text-primary-3 hover:opacity-75"
                href="#beranda"
              >
                <img src={avatar} alt="" className="w-10 h-10" />
                <span className="lg:hidden">John Doe</span>
              </a>
              <a
                className="text-md font-medium leading-snug text-primary-3 hover:opacity-75"
                href="#beranda"
              >
                <i className="fa-regular fa-bell text-3xl lg:text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
