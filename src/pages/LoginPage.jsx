/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../config/api';

import Background from '../components/Background';
import AccessibilityPopup from '../components/AccessibilityPopup';
import BackgroundAccessible from '../components/BackgroundAccessible';

export default function LoginPage() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [responseData, setResponseData] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accessibility, setAccessibility] = useState(false);

  const renderAccesibility = () => {
    if (accessibility) {
      return <BackgroundAccessible />;
    }
    return <Background />;
  };

  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.setProperty('--color-primary', '#5D5FEF');
    document.body.style.setProperty('--color-secondary', '#636499');
    document.body.style.setProperty('--color-tertiary', '#121225');
  }, []);

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const LoginHandler = async (e) => {
    e.preventDefault();
    await api
      .post('/user/login', {
        username,
        password,
      })
      .then((response) => {
        setResponseData(response.data);
        console.log(response.data);
        if (response.data.status === 'ok') {
          localStorage.setItem('authenticated', true);
          localStorage.setItem('token', response.data.data);
          navigate('/ruang');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const userLogOut = () => {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('token');
    console.log('User logged out');
    navigate('/login');
  };

  const userLoggedIn = () => {
    const loggedIn = localStorage.getItem('authenticated');
    if (loggedIn) {
      return true;
    }
    return false;
  };

  const userAuthenticated = userLoggedIn();
  if (userAuthenticated) {
    return (
      <>
        <AccessibilityPopup accessibility={accessibility} setAccess={setAccessibility} />
        {renderAccesibility()}
        <div className="relative flex justify-center items-center h-screen overflow-hidden">
          <div className="w-[385px] sm:w-[485px] bg-[#dbdbdb] bg-opacity-50 px-[44px] py-[65px] rounded-2xl backdrop-filter backdrop-blur-lg">
            <h1 className="text-[45px] font-bold text-primary-1">User Logged In</h1>
            <p className="font-medium text-[15px]">
              Kamu sudah masuk ke aplikasi (logged in)
            </p>
            <div>
              <p><a className="text-primary-2" href="/">Kembali ke Halaman Utama</a></p>
              <p><a className="text-primary-2" href="/ruang">Telusuri Ruang Diskusi</a></p>
              <button
                onClick={() => userLogOut()}
                type="button"
                className="flex justify-end items-center text-white w-[70px] h-[40px] mt-[40px] bg-primary-2 text-[15px] font-medium p-0 rounded-[17px] relative hover:shadow-primary-1 shadow-2xl"
              >
                <span className="text-center w-full">Log Out</span>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!userAuthenticated) {
    return (
      <>
        <AccessibilityPopup accessibility={accessibility} setAccess={setAccessibility} />
        {renderAccesibility()}
        <div className="relative flex justify-center items-center h-screen overflow-hidden">
          <div className="w-[385px] sm:w-[485px] bg-[#dbdbdb] bg-opacity-50 px-[44px] py-[65px] rounded-2xl backdrop-filter backdrop-blur-lg">
            <h1 className="text-[60px] font-bold text-primary-1">Masuk</h1>
            <p className="font-medium text-[15px]">
              Masuk dengan akun yang sudah terdaftar
            </p>
            <form
              action="#"
              className="login-input mt-[75px]"
              onSubmit={LoginHandler}
            >
              <div className="flex flex-col mb-3">
                <input
                  type="text"
                  placeholder="username"
                  name="username"
                  id="username"
                  className=" border-b py-4 px-1 border-[#7a7a7a] focus:outline-none focus:border-primary-1"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="relative w-full">
                <input
                  className="border-b border-[#7a7a7a] w-full py-4 px-1 focus:outline-none focus:border-primary-1 pr-16"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  type={passwordShown ? 'text' : 'password'}
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-2">
                  <button
                    type="button"
                    className="rounded text-sm font-mono cursor-pointer js-password-label underline"
                    htmlFor="toggle"
                    onClick={togglePasswordVisiblity}
                  >
                    {passwordShown ? (
                      <i className="fa-sharp fa-solid fa-eye text-xl text-[#7a7a7a]" />
                    ) : (
                      <i className="fa-sharp fa-solid fa-eye-slash text-xl text-[#7a7a7a]" />
                    )}
                  </button>
                </div>
              </div>
              {responseData.status === 'error' && (
              <p className="text-red-500 text-sm mt-3">{responseData.error}</p>
              )}
              <button
                type="submit"
                className="flex justify-end items-center text-white w-[80px] h-[80px] mt-[40px] bg-primary-2 text-[20px] font-medium p-0 rounded-[20px] relative hover:w-full transition-all ease-in-out duration-300 shadow-primary-1 shadow-2xl"
              >
                <span className="text-center w-full">Login</span>
                <i className="flex justify-center items-center fa-solid fa-arrow-right text-4xl text-white bg-primary-1 z-10 -ml-[80px] rounded-[20px] w-[80px] h-[80px] shadow-sm" />
              </button>
            </form>
            <div>
              <p className="text-[15px] text-center mt-[40px]">
                Belum punya akun?
                <a
                  href="/register"
                  className="text-primary-2 font-medium ml-[5px]"
                >
                  Daftar sekarang
                </a>
              </p>
              <p className="text-center"><a className="text-primary-2" href="/">Kembali ke Halaman Utama</a></p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
