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
import Popup from 'reactjs-popup';
import { useNavigate } from 'react-router-dom';

import AccessibilityPopup from '../components/AccessibilityPopup';
import Navbar from '../layouts/Navbar';
import Background from '../components/Background';
import DiscussionRoomCard from '../components/DiscussionRoomCard';
import BackgroundAccessible from '../components/BackgroundAccessible';

import api from '../config/api';

export default function HomePage() {
  const [discussionRooms, setDiscussionRooms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [accessibility, setAccessibility] = useState(false);

  const renderAccesibility = () => {
    if (accessibility) {
      return <BackgroundAccessible noBig />;
    }
    return <Background noBig />;
  };

  const navigate = useNavigate();

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
        setSearchResults(response.data.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
    document.body.style.setProperty('--color-primary', '#5D5FEF');
    document.body.style.setProperty('--color-secondary', '#636499');
    document.body.style.setProperty('--color-tertiary', '#121225');
  }, []);

  // search function for discussion rooms

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchResults(discussionRooms);
    const newResults = discussionRooms.filter((discussion) =>
      discussion.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(newResults);

    setSearchTerm('');
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <AccessibilityPopup accessibility={accessibility} setAccess={setAccessibility} />
      <Navbar />
      {renderAccesibility()}
      <div className="container mx-auto px-2 mt-4">
        <div className="flex flex-col lg:flex-row mb-4">
          <form onSubmit={handleSubmit} className="flex-grow">
            <input
              type="text"
              placeholder="Cari ruang diskusi"
              className="border-2 border-primary-1 rounded-lg flex-grow py-1 px-2 w-full"
              value={searchTerm}
              onChange={handleChange}
            />
          </form>
          <Popup
            trigger={
              <button
                type="button"
                className="py-1 px-6 sm:px-10 bg-primary-1 rounded-md mt-2 lg:mt-0 lg:ml-2 text-white"
              >
                Buat baru
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div className="bg-white rounded-lg shadow-lg p-4 m-4 max-h-screen pb-24 overflow-scroll">
                <h2 className="font-semibold text-xl mb-4">
                  Ajukan pertanyaan
                </h2>
                <div>
                  <p>Cara mengajukan pertanyaan:</p>
                  <ol className="list-decimal list-inside">
                    <li>
                      Pastikan pertanyaan Anda belum pernah di bahas pada forum
                      ini, Anda bisa melakukan searching terlebih dahulu dengan
                      memasukkan kata kunci.
                    </li>
                    <li>
                      Mulailah dengan menuliskan judul pertanyaan Anda secara
                      singkat dan jelas
                    </li>
                    <li>
                      Sampaikan kendala permasalahan Anda dengan tidak
                      berbelit-belit
                    </li>
                    <li>
                      Tambahkan tag yang membantu memunculkan pertanyaan Anda
                      kepada anggota komunitas yang lain.
                    </li>
                  </ol>
                </div>
                <div className="mt-3">
                  <label
                    htmlFor="title"
                    className="font-semibold text-primary-1 text-lg"
                  >
                    Judul pertanyaan
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="border border-primary-1 rounded-lg flex-grow py-1 px-2 w-full"
                  />
                </div>
                <div className="mt-3">
                  <label
                    htmlFor="description"
                    className="font-semibold text-primary-1 text-lg"
                  >
                    Tuliskan peretanyaanmu
                  </label>

                  <textarea
                    id="description"
                    className="border border-primary-1 rounded-lg flex-grow py-1 px-2 w-full h-40"
                  />
                </div>
                <div className="mt-3">
                  <label
                    htmlFor="tags"
                    className="font-semibold text-primary-1 text-lg"
                  >
                    Tambahkan kata kunci
                  </label>
                  <span> *minimal 3 kata kunci</span>
                  <input
                    type="text"
                    id="tags"
                    className="border border-primary-1 rounded-lg flex-grow py-1 px-2 w-full"
                  />
                </div>
                <div className="mt-3 text-end">
                  <button
                    type="button"
                    className="mr-3 py-2 px-6 sm:px-10 border-2 border-primary-1 rounded-md mt-2 lg:mt-0 lg:ml-2 text-primary-1 font-semibold"
                    onClick={() => {
                      close();
                    }}
                  >
                    Batal
                  </button>
                  <button
                    type="button"
                    className="py-2 px-6 sm:px-10 bg-primary-1 shadow-lg shadow-primary-1 rounded-md mt-2 lg:mt-0 lg:ml-2 text-white"
                  >
                    Buat Diskusi
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
      <div className="container mx-auto px-2 mt-4">
        <h2 className="font-semibold mb-4">
          Daftar
          <span className="text-primary-1"> Ruang Diskusi</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {searchResults.map((discussionRoom) => (
            <DiscussionRoomCard
              key={discussionRoom._id}
              discussionRoom={discussionRoom}
            />
          ))}
          {/* {discussionRooms.map((discussionRoom) => (
            <DiscussionRoomCard
              key={discussionRoom._id}
              logo={discussionRoom.logo_grup}
              subject={discussionRoom.subject}
              user={discussionRoom.peserta}
            />
          ))} */}
        </div>
      </div>
    </>
  );
}
