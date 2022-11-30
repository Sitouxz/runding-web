import React from 'react';

import avatar from '../assets/img/avatar.png';

export default function QuestionResponseCard() {
  return (
    <div className="flex flex-col gap-3 justify-between items-center lg:items-start mt-3 bg-white shadow-lg border-2 rounded-lg p-3">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-3 w-full ">
        <div className="flex justify-center items-center">
          <img src={avatar} alt="" className="w-14 h-14" />
        </div>
        <div className="flex-grow flex flex-col justify-center items-center lg:items-start lg:block">
          <h3 className="font-semibold text-xl">John Doe</h3>
          <div className="flex items-center">
            <i className="fa-solid fa-clock mr-3 w-5 h-5 flex justify-center items-center text-xl text-primary-1" />
            <span className=" font-medium text-gray-500">1 Jam yang lalu</span>
          </div>
        </div>
      </div>
      <div className="mt-3 ">
        <h3>Kendala dalam menampilkan gambar pada css</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore
        </p>
      </div>
    </div>
  );
}
