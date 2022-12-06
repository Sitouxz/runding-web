/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Background from '../components/Background';

import api from '../config/api';

export default function LoginPage() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [responseData, setResponseData] = useState('');

  const navigate = useNavigate();

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const toggleConfirmPasswordVisiblity = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const RegisterHandler = async (e) => {
    e.preventDefault();
    await api
      .post('user/register', {
        username,
        email,
        password,
        confirmPassword,
      })
      .then((response) => {
        setResponseData(response.data);
        console.log(response.data);
        if (response.data.status === 'ok') {
          navigate('/login');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Background />
      <div className="relative flex justify-center items-center h-screen overflow-hidden">
        <div className="w-[385px] sm:w-[485px] bg-[#dbdbdb] bg-opacity-50 px-[44px] py-[65px] rounded-2xl backdrop-filter backdrop-blur-lg">
          <h1 className="text-[60px] font-bold text-primary-1">Daftar</h1>
          <p className="font-medium text-[15px]">Buat akun baru di Runding</p>
          <form
            action="#"
            className="login-input mt-[75px]"
            onSubmit={RegisterHandler}
          >
            <div className="flex flex-col mb-3">
              <input
                type="username"
                placeholder="Username"
                name="username"
                id="username"
                className=" border-b py-4 px-1 border-[#7a7a7a] focus:outline-none focus:border-primary-1"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
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
            <div className="relative w-full">
              <input
                className="border-b border-[#7a7a7a] w-full py-4 px-1 focus:outline-none focus:border-primary-1 pr-16"
                id="confirmPassword"
                placeholder="Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                type={confirmPasswordShown ? 'text' : 'password'}
              />
              <div className="absolute inset-y-0 right-0 flex items-center px-2">
                <button
                  type="button"
                  className="rounded text-sm font-mono cursor-pointer js-password-label underline"
                  htmlFor="toggle"
                  onClick={toggleConfirmPasswordVisiblity}
                >
                  {confirmPasswordShown ? (
                    <i className="fa-sharp fa-solid fa-eye text-xl text-[#7a7a7a]" />
                  ) : (
                    <i className="fa-sharp fa-solid fa-eye-slash text-xl text-[#7a7a7a]" />
                  )}
                </button>
              </div>
            </div>
            {responseData && (
              <p className="text-red-500 text-sm">{responseData.error}</p>
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
              Sudah punya akun?
              <a
                href="/login"
                className="text-primary-2 font-medium ml-[5px]"
              >
                Masuk sekarang
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
