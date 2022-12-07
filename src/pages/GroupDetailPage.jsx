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
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../layouts/Navbar';
import Background from '../components/Background';
import AccessibilityPopup from '../components/AccessibilityPopup';
import BackgroundAccessible from '../components/BackgroundAccessible';

import api from '../config/api';

export default function HomePage() {
  const [discussionRoom, setDiscussionRoom] = useState(null);
  const [accessibility, setAccessibility] = useState(false);

  const renderAccesibility = () => {
    if (accessibility) {
      return <BackgroundAccessible noBig />;
    }
    return <Background noBig />;
  };

  const params = useParams();

  useEffect(() => {
    const token = localStorage.getItem('token');
    api
      .get(`/runding/${params.id}`, {
        headers: {
          'auth-token': token, // the token is a variable which holds the token
        },
      })
      .then((response) => {
        setDiscussionRoom(response.data);
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

  return (
    <>
      <AccessibilityPopup accessibility={accessibility} setAccess={setAccessibility} />
      <Navbar />
      {renderAccesibility()}
      <div className="container mx-auto px-2 mt-4">
        <h2 className="font-semibold mb-4">
          Ruang Diskusi :
        </h2>
        {/*
        <span className="text-primary-2">
            Apakah kamu peserta ruang ini :
            {discussionRoom.member ? ' yes' : ' no'}
        </span>
        <p className="text-primary-1 text-[35px]">
            {' '}
            {discussionRoom.data.subject}
        </p>
        <div className="w-30 flex">
          <img src={discussionRoom.data.logo_grup} alt="" />
        </div>
        <p className="text-primary-1">
            Admins :
            { discussionRoom.data.admin_username}
        </p>
        <p className="text-primary-1">
            Tema :
            { discussionRoom.data.jenisRunding}
        </p>
        <p className="text-primary-1">
            Deskripsi :
            { discussionRoom.data.deksripsi}
        </p>
        <p className="text-primary-1">
            Meet :
            { discussionRoom.data.meetTime}
        </p>
        */}
      </div>
    </>
  );
}
