import React from 'react';

import avatar from '../assets/img/avatar.png';

// card untuk tiap jawaban/balasan dalam page detail pertanyaan
export default function QuestionResponseCard(props) {
  const { data } = props;

  const renderTime = () => {
    const date = new Date(data.createdAt);
    const now = new Date();
    const diff = now - date;
    const diffInMinutes = Math.floor(diff / 1000 / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInMonths / 12);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} menit yang lalu`;
    }
    if (diffInHours < 24) {
      return `${diffInHours} jam yang lalu`;
    }
    if (diffInDays < 30) {
      return `${diffInDays} hari yang lalu`;
    }
    if (diffInMonths < 12) {
      return `${diffInMonths} bulan yang lalu`;
    }
    return `${diffInYears} tahun yang lalu`;
  };

  return (
    <div className="flex flex-col gap-3 justify-between items-center lg:items-start mt-3 bg-white shadow-lg border-2 rounded-lg p-3">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-3 w-full ">
        <div className="flex justify-center items-center">
          <img src={avatar} alt="" className="w-14 h-14" />
        </div>
        <div className="flex-grow flex flex-col justify-center items-center lg:items-start lg:block">
          <h3 className="font-semibold text-xl">{data.author_username}</h3>
          <div className="flex items-center">
            <i className="fa-solid fa-clock mr-3 w-5 h-5 flex justify-center items-center text-xl text-primary-1" />
            <span className=" font-medium text-gray-500">{renderTime()}</span>
          </div>
        </div>
      </div>
      <div className="mt-3 ">
        <p>{data.content}</p>
      </div>
    </div>
  );
}
