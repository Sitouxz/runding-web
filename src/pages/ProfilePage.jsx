/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../config/api';

import AccessibilityPopup from '../components/AccessibilityPopup';
import Background from '../components/Background';
import Navbar from '../layouts/Navbar';
import RandomFacts from '../components/RandomFacts';
import BackgroundAccessible from '../components/BackgroundAccessible';

import avatarBig from '../assets/img/avatarBig.png';

export default function ProfilePage() {
  const [accessibility, setAccessibility] = useState(false);
  const [dataUser, setDataUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    api
      .get('/user/data', {
        headers: {
          'auth-token': token, // the token is a variable which holds the token
        },
      })
      .then((response) => {
        setDataUser(response.data);
        // eslint-disable-next-line no-console
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
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
      <div className="container mx-auto lg:grid grid-rows-1 grid-cols-3 px-2 my-10">
        <div className="col-span-1 flex flex-col items-center">
          <img src={avatarBig} alt="" />
        </div>
        <div className="col-span-2 ml-3 mt-5">
          <h2 className="mb-4 font-semibold text-xl text-primary-1">Informasi Pengguna</h2>
          {
            (() => {
              if (loading) {
                return (
                  <div className="flex justify-center items-center pt-2">
                    <i className="fa-solid fa-circle-notch animate-spin text-3xl text-primary-1" />
                  </div>
                );
              }

              if (dataUser.status === 'ok') {
                return (
                  <div className=" mt-2 text-primary-3">
                    <p className="mb-1">{`Username : ${dataUser.data.username || 'no username'}`}</p>
                    <p className="mb-1">{`E-mail : ${dataUser.data.email || 'no email'}`}</p>
                    <p className="mb-1">{`ID User : ${dataUser.data._id}`}</p>
                    <p className="mb-1 mt-3">Jumlah Kelas :</p>
                    <p className="mb-1">{`Dibuat/admin : ${dataUser.data.adminkelas.length}`}</p>
                    <p className="mb-1">{`Bergabung : ${dataUser.data.pesertakelas.length}`}</p>
                  </div>
                );
              }

              return (
                <div>
                  <p>Maaf, anda bukan anggota grup ini</p>
                </div>
              );
            })()
            }
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 mb-10">
            <button
              onClick={() => {
                navigate('/manage');
              }}
              type="button"
              className="flex justify-end items-center text-white w-[130px] h-[68px] mt-[40px] bg-primary-2 text-[15px] font-medium p-0 rounded-[14px] relative hover:shadow-primary-1 shadow-2xl"
            >
              <span className="text-center w-full">Manage Ruang Diskusi</span>
            </button>
            <button
              onClick={() => {
                navigate('/joined');
              }}
              type="button"
              className="flex justify-end items-center text-white w-[160px] h-[68px] mt-[40px] bg-primary-2 text-[15px] font-medium p-0 rounded-[17px] relative hover:shadow-primary-1 shadow-2xl"
            >
              <span className="text-center w-full">Lihat Ruang Diskusi Yang Diikuti</span>
            </button>
          </div>
        </div>
        <RandomFacts />
      </div>
    </>
  );
}
