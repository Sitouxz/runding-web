import React from 'react';

import avatar from '../assets/img/avatar.png';

export default function MyGroupCard() {
  return (
    <div className="container mx-auto px-2 mt-4">
      <div className="mt-3 bg-white shadow-lg border-2 rounded-lg p-3">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-3 w-full ">
          <div className="w-24 flex justify-center items-center">
            <img src={avatar} alt="" />
          </div>
          <div className="flex-grow flex flex-col justify-center items-center lg:items-start lg:block">
            <h3 className="font-semibold mb-2">Komunitas Grup Javascript</h3>
            <div className="flex items-center mb-1">
              <i className="fa-solid fa-user mr-3 w-5 h-5 flex justify-center items-center text-xl" />
              <span className="text-primary-1 font-medium">10 Anggota</span>
            </div>
            <div className="flex items-center mb-1">
              <i className="fa-solid fa-users mr-3 w-5 h-5 flex justify-center items-center text-xl" />
              <span className="font-medium">
                Dibuat oleh
                <span className="text-primary-1"> John Doe</span>
              </span>
            </div>
          </div>
          <div className="flex justify-center lg:block w-full lg:w-auto">
            <span>
              <i className="fa-solid fa-calendar mr-2" />
              17 November 2022
            </span>
          </div>
        </div>
        <div className="mt-5">
          <p>
            grup ini didirikan tanggal 23 Agustus 2022. setelah anda mengklik
            untuk bergabung ke dalam grup anda dapat melakukan komunikasi dengan
            teman - teman anda dari berbagai belahan dunia. perlu diingat untuk
            selalu menggunakan grup ini dengan sebaik-baiknya. Komunitas Grup
            Javascript merupakan
          </p>
        </div>
        <div className="mt-5 flex flex-col lg:block text-start">
          <button
            type="button"
            className="bg-primary-1 text-white font-semibold px-6 py-3 flex-grow rounded-lg shadow-lg shadow-primary-1 mb-3 lg:mr-3"
          >
            Jadwalkan Meeting
          </button>
          <button
            type="button"
            className="bg-primary-1 text-white font-semibold px-6 py-3 flex-grow rounded-lg shadow-lg shadow-primary-1"
          >
            Lihat Pertanyaan
          </button>
        </div>
      </div>
    </div>
  );
}
