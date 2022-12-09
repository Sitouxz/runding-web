import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
              className="px-4 text-black cursor-pointer text-xl leading-none border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
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
                <Link
                  className="w-full py-3 lg:mr-3 px-1 text-lg font-medium leading-snug text-primary-3 hover:bg-slate-200"
                  to="/"
                >
                  Beranda
                </Link>
              </li>
              <li className="flex">
                <Link
                  className="w-full py-3 lg:mr-3 px-1 text-lg font-medium leading-snug text-primary-3 hover:bg-slate-200"
                  to="/ruang"
                >
                  Ruang Diskusi
                </Link>
              </li>
              <li className="flex">
                <Link
                  className="w-full py-3 lg:mr-3 px-1 text-lg font-medium leading-snug text-primary-3 hover:bg-slate-200"
                  to="/about"
                >
                  Tentang Kami
                </Link>
              </li>
            </ul>
            <div className="w-full lg:w-auto flex justify-between items-center gap-2 border-b-2 lg:border-none">
              <Link
                className="flex items-center gap-3 py-2 text-md font-medium leading-snug text-primary-3 hover:opacity-75"
                to="/profile"
              >
                <img src={avatar} alt="" className="w-10 h-10" />
                <span className="lg:hidden">Your Proifle</span>
              </Link>
              <Link
                className="text-md font-medium leading-snug text-primary-3 hover:opacity-75"
                to="/notifications"
              >
                <i className="fa-regular fa-bell text-3xl lg:text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
