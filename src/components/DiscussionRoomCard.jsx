/* eslint-disable camelcase */
import React from 'react';

// import avatar from '../assets/img/avatar.png';

export default function DiscussionRoomCard({ discussionRoom }) {
  const { logo_grup, subject, user } = discussionRoom;

  return (
    <div className="bg-white shadow-lg flex flex-col lg:flex-row justify-between items-center gap-3 w-full border-2 rounded-lg p-3">
      <div className="w-24 flex justify-center items-center">
        <img src={logo_grup} alt="" />
      </div>
      <div className="flex-grow flex flex-col justify-center items-center lg:block">
        <h3 className="font-semibold mb-2">{subject}</h3>
        <div className="flex items-center mb-1">
          <i className="fa-solid fa-user mr-3 w-5 h-5 flex justify-center items-center text-xl" />
          <span className="text-primary-1 font-medium">
            {user <= 0 ? '0 ' : user}
            Anggota
          </span>
        </div>
        <div className="flex items-center mb-1">
          <i className="fa-solid fa-users mr-3 w-5 h-5 flex justify-center items-center text-xl" />
          <span className="font-medium">
            Dibuat oleh
            <span className="text-primary-1"> John Doe</span>
          </span>
        </div>
      </div>
      <div className="flex lg:block w-full lg:w-auto">
        <button
          type="button"
          className="bg-primary-1 text-white text-3xl font-semibold px-8 py-8 flex-grow rounded-lg"
        >
          <i className="fa-solid fa-arrow-right" />
        </button>
      </div>
    </div>
  );
}
