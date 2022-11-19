import React, { useState } from 'react';

import logoImg from '../assets/img/logoImg.svg';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white lg:bg-transparent shadow-lg lg:shadow-none border-b-2 lg:border-none mb-3 ">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
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
            id="example-navbar-danger"
          >
            <ul className="flex flex-col justify-center lg:flex-row list-none lg:ml-auto mt-2">
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
      </nav>
    </div>
  );
}
