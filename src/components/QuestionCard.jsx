import React from 'react';

import avatar from '../assets/img/avatar.png';

export default function QuestionCard() {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start mt-3 bg-white shadow-lg border-2 rounded-lg p-3">
      <div className="lg:w-3/4 mt-3 lg:mt-0 text-center lg:text-start">
        <h3 className="font-semibold text-xl mb-3">
          Kendala dalam menampilkan gambar pada css
        </h3>
        <p className="lg:w-3/4">
          Saya sudah mencoba menampilkan gambar pada css dengan cara
          background-image: url(‘/images/1.png’); namun gambar tidak muncul
          apakah ada yang bisa membantu saya?
        </p>
      </div>
      <div>
        <div className="flex items-center gap-3 mb-3">
          <img src={avatar} alt="" className="w-12 h-12" />
          <div className="flex flex-col">
            <span className="font-semibold">John Doe</span>
            <div className="flex items-center">
              <i className="fa-solid fa-clock text-primary-1 mr-2" />
              <span className="text-sm">1 Jam yang lalu</span>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-3">
            <i className="fa-solid fa-message text-primary-1 mr-2" />
            <span>7 Pembahasan</span>
          </div>
          <div className="flex gap-3">
            <span className="py-1 px-3 bg-primary-1 rounded-md text-white">
              css
            </span>
            <span className="py-1 px-3 bg-primary-1 rounded-md text-white">
              image
            </span>
            <span className="py-1 px-3 bg-primary-1 rounded-md text-white">
              error
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
