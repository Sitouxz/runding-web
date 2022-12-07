/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable consistent-return */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-else-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-wrap-multilines */
import React, { useState, useEffect, useReducer } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Navbar from '../layouts/Navbar';
import Background from '../components/Background';
import AccessibilityPopup from '../components/AccessibilityPopup';
import BackgroundAccessible from '../components/BackgroundAccessible';

import api from '../config/api';

export default function HomePage() {
  const [subject, setSubject] = useState('');
  const [logogroup, setLogoGroup] = useState('');
  const [jenisrunding, setJenisRunding] = useState('');
  const [adminusername, setAdminUsername] = useState([]);
  const [peserta, setPeserta] = useState([]);
  const [deskripsi, setDeskripsi] = useState('');
  const [meetlink, setMeetLink] = useState('');
  const [created, setCreated] = useState('');
  const [membergroup, setMemberGroup] = useState(false);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const [accessibility, setAccessibility] = useState(false);

  const renderAccesibility = () => {
    if (accessibility) {
      return <BackgroundAccessible noBig />;
    }
    return <Background noBig />;
  };

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    api
      .get(`/runding/${params.id}`, {
        headers: {
          'auth-token': token, // the token is a variable which holds the token
        },
      })
      .then((response) => {
        setSubject(response.data.data.subject);
        setLogoGroup(response.data.data.logo_grup);
        setJenisRunding(response.data.data.jenisRunding);
        setAdminUsername(response.data.data.admin_username);
        setPeserta(response.data.data.peserta);
        setDeskripsi(response.data.data.deskripsi);
        setMeetLink(response.data.data.meetLink);
        setCreated(response.data.data.createdAt);
        if (response.data.member || response.data.author) {
          setMemberGroup(true);
        }
        // eslint-disable-next-line no-console
        console.log(response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
    document.body.style.setProperty('--color-primary', '#5D5FEF');
    document.body.style.setProperty('--color-secondary', '#636499');
    document.body.style.setProperty('--color-tertiary', '#121225');
  }, []);

  const userJoin = () => {
    const token = localStorage.getItem('token');
    api
      .put(`/runding/join/${params.id}`, 'mytoken', {
        headers: {
          'auth-token': token, // the token is a variable which holds the token
        },
      })
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  const userLeave = () => {
    const token = localStorage.getItem('token');
    api
      .put(`/runding/leave/${params.id}`, 'mytoken', {
        headers: {
          'auth-token': token, // the token is a variable which holds the token
        },
      })
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  return (
    <>
      <AccessibilityPopup accessibility={accessibility} setAccess={setAccessibility} />
      <Navbar />
      {renderAccesibility()}
      <div className="container mx-auto px-2 mt-4">
        <button
          onClick={() => navigate(`/ruang/question/${params.id}`)}
          type="button"
          className="flex justify-end items-center text-white w-[70px] h-[60px] mt-[40px] bg-primary-2 text-[15px] font-medium p-0 rounded-[17px] relative hover:shadow-primary-1 shadow-2xl"
        >
        <span className="text-center w-full">Buka halaman question</span>
        </button>
        <span className="text-primary-2">
            Apakah kamu peserta ruang ini :
            {membergroup ? ' yes' : ' no'}
        </span>
        <p className="text-primary-1 text-[35px]">
            {' '}
            {`${subject}`}
        </p>
        <div className="w-30 flex">
          <img src={`${logogroup}`} alt="" />
        </div>
        <p className="text-primary-1">
            Admin :
            {`${adminusername}`}
        </p>
        <p className="text-primary-1">
            Tema :
            {`${jenisrunding}`}
        </p>
        <p className="text-primary-1">
            Deskripsi :
            {membergroup ? `${deskripsi}` : 'Maaf, anda bukan anggota'}
        </p>
        <p className="text-primary-1">
            Meet :
            {meetlink ? `${meetlink}` : 'Meeting belum dibuat'}
        </p>
        <p className="text-primary-1">
            Group dibuat pada :
            {membergroup ? `${created}` : 'Maaf, anda bukan anggota'}
        </p>
        <button
          onClick={() => {
            userJoin();
          }}
          type="button"
          className="flex justify-end items-center text-white w-[70px] h-[60px] mt-[40px] bg-primary-2 text-[15px] font-medium p-0 rounded-[17px] relative hover:shadow-primary-1 shadow-2xl"
        >
        <span className="text-center w-full">Join Ruang Diskusi</span>
        </button>
        <button
          onClick={() => {
            userLeave();
          }}
          type="button"
          className="flex justify-end items-center text-white w-[70px] h-[60px] mt-[40px] bg-primary-2 text-[15px] font-medium p-0 rounded-[17px] relative hover:shadow-primary-1 shadow-2xl"
        >
        <span className="text-center w-full">Leave Ruang Diskusi</span>
        </button>
      </div>
    </>
  );
}
