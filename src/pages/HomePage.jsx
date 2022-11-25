/* eslint-disable no-underscore-dangle */
/* eslint-disable no-else-return */
import React, { useState, useEffect } from 'react';

import Navbar from '../layouts/Navbar';
import Background from '../components/Background';
import DiscussionRoomCard from '../components/DiscussionRoomCard';

import api from '../config/api';

export default function HomePage() {
  const [discussionRooms, setDiscussionRooms] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    api
      .get('/runding', {
        headers: {
          'auth-token': token, // the token is a variable which holds the token
        },
      })
      .then((response) => {
        setDiscussionRooms(response.data.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Background noBig />
      <div className="container mx-auto px-2 mt-4s">
        <div className="flex">
          <input
            type="text"
            placeholder="Cari ruang diskusi"
            className="border-2 border-primary-1 rounded-lg flex-grow py-1 px-2"
          />
          <button
            type="button"
            className="py-1 px-6 sm:px-10 bg-primary-1 rounded-md ml-2 text-white"
          >
            Buat baru
          </button>
        </div>
      </div>
      <div className="container mx-auto px-2 mt-4">
        <h2 className="font-semibold mb-4">
          Daftar
          <span className="text-primary-1"> Ruang Diskusi</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {discussionRooms.map((discussionRoom) => (
            <DiscussionRoomCard
              key={discussionRoom._id}
              logo={discussionRoom.logo_grup}
              subject={discussionRoom.subject}
              user={discussionRoom.peserta}
            />
          ))}
        </div>
      </div>
    </>
  );
}
