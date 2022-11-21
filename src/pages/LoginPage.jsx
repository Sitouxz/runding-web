/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import Background from '../components/Background';

export default function LoginPage() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const LoginHandler = async (e) => {
    e.preventDefault();
    // await signIn(email, password);
    console.log(email, password);
  };

  return (
    <>
      <Background />
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
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                className=" border-b py-4 px-1 border-[#7a7a7a] focus:outline-none focus:border-primary-1"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative w-full">
              <input
                className="border-b border-[#7a7a7a] w-full py-4 px-1 focus:outline-none focus:border-primary-1 pr-16"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                type={passwordShown ? 'text' : 'password'}
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
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <label className="container">
                  Remember me
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </>
  );
}
