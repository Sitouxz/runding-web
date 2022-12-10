/* eslint-disable camelcase */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import avatar from '../assets/img/avatar.png';

/* card untuk menampilkan setiap group yang user merupakan admin sehingga user dapat
  mengakses admin settings dan halaman pertanyaan */
export default function MyGroupCard({ discussionRoom }) {
  const navigate = useNavigate();

  const {
    _id, logo_grup, subject, peserta, admin_username, createdAt, deskripsi,
  } = discussionRoom;

  return (
    <div id={`${_id}`} className="container mx-auto px-2 mt-4">
      <div className="mt-3 bg-white shadow-lg border-2 rounded-lg p-3">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-3 w-full ">
          <div className="w-24 flex justify-center items-center">
            <img src={logo_grup || avatar} alt="group logo" />
          </div>
          <div className="flex-grow flex flex-col justify-center items-center lg:items-start lg:block">
            <h3 className="font-semibold mb-2">{subject}</h3>
            <div className="flex items-center mb-1">
              <i className="fa-solid fa-user mr-3 w-5 h-5 flex justify-center items-center text-xl" />
              <span className="text-primary-1 font-medium">
                {peserta.length <= 0 ? '0 ' : `${peserta.length} `}
                {' '}
                Anggota
              </span>
            </div>
            <div className="flex items-center">
              <i className="fa-solid fa-users mr-3 w-5 h-5 flex justify-center items-center text-xl" />
              <span className="font-medium">
                Dibuat oleh
                <span className="text-primary-1">{` ${admin_username[0]}`}</span>
              </span>
            </div>
          </div>
          <div className="flex justify-center lg:block w-full lg:w-auto">
            <span>
              <i className="fa-solid fa-calendar mr-2" />
              {createdAt.slice(0, 10)}
            </span>
          </div>
        </div>
        <div className="mt-5">
          <p>
            {deskripsi}
          </p>
        </div>
        <div className="mt-5 flex flex-col lg:block text-start">
          <button
            type="button"
            onClick={() => navigate(`/ruang/administrator/${_id}`)}
            className="bg-primary-1 text-white font-semibold px-6 py-3 flex-grow rounded-lg shadow-lg shadow-primary-1 mb-3 lg:mr-3"
          >
            Admin Settings
          </button>
          <button
            type="button"
            onClick={() => navigate(`/ruang/question/${_id}`)}
            className="bg-primary-1 text-white font-semibold px-6 py-3 flex-grow rounded-lg shadow-lg shadow-primary-1"
          >
            Lihat Pertanyaan
          </button>
        </div>
      </div>
    </div>
  );
}
