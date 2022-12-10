/* eslint-disable no-undef */
/* eslint-disable camelcase */
import React from 'react';
import { useNavigate } from 'react-router-dom';

/* card untuk menampilkan data grup ruang diskusi meliputi
   nama ruang diskusi, jumlah anggota, dan tema ruang diskusi */
export default function DiscussionRoomCard({ discussionRoom }) {
  const navigate = useNavigate();

  const {
    _id, logo_grup, subject, peserta, jenisRunding,
  } = discussionRoom;

  return (
    <div id={`${_id}`} className="bg-white shadow-lg flex flex-col lg:flex-row justify-between items-center gap-3 w-full border-2 rounded-lg p-3">
      <div className="w-24 flex justify-center items-center">
        <img src={logo_grup} alt="group logo" />
      </div>
      <div className="flex-grow flex flex-col justify-center items-center lg:block">
        <h3 className="font-semibold mb-2">{subject}</h3>
        <div className="flex items-center mb-1">
          <i className="fa-solid fa-user mr-3 w-5 h-5 flex justify-center items-center text-xl" />
          <span className="text-primary-1 font-medium">
            {peserta.length <= 0 ? '0 ' : `${peserta.length} `}
            Anggota
          </span>
        </div>
        <div className="flex items-center mb-1">
          <i className="fa-solid fa-users mr-3 w-5 h-5 flex justify-center items-center text-xl" />
          <span className="font-medium">
            Tema Kelas :
            <span className="text-primary-1">
              {` ${jenisRunding}`}
            </span>
          </span>
        </div>
      </div>
      <div className="flex lg:block w-full lg:w-auto">
        <button
          type="button"
          className="bg-primary-1 text-white text-3xl font-semibold px-8 py-8 flex-grow rounded-lg"
          onClick={() => navigate(`/ruang/${_id}`)}
        >
          <i className="fa-solid fa-arrow-right" />
        </button>
      </div>
    </div>
  );
}
