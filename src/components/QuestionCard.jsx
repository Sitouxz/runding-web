/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-template */
import React from 'react';
import { Link } from 'react-router-dom';

/* Card untuk tiap pertanyaan, akan menampilkan author question, judul dan pertanyaan,
   kapan question dibuat, dan jumlah balasan tiap question */
export default function QuestionCard({ item }) {
  const renderTag = () => {
    if (item.tags.length === 0) {
      return (
        <span className="py-1 px-2 text-sm bg-primary-1 rounded-md text-white">
          Belum ada tag
        </span>
      );
    }
    const tags = item.tags.map((tag) => (
      <span className="py-1 px-2 text-sm bg-primary-1 rounded-md text-white">
        {tag}
      </span>
    ));
    return tags;
  };

  const renderTime = () => {
    const date = new Date(item.createdAt);
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

  const renderReply = () => {
    if (item.replies.length === 0) {
      return (
        <span className="text-primary-1 font-medium text-sm">
          Belum ada Pembahasan
        </span>
      );
    }
    if (item.replies.length === 1) {
      return (
        <span className="text-primary-1 font-medium text-sm">
          {item.replies.length}
          Pembahasan
        </span>
      );
    }
    return (
      <span className="text-primary-1 font-medium text-sm">
        {`${item.replies.length} `}
        Pembahasan
      </span>
    );
  };

  return (
    <Link
      to={`/question/detail/${item._id}`}
      className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start mt-3 bg-white shadow-lg border-2 rounded-lg p-3 hover:bg-slate-50"
    >
      <div className="lg:w-3/4 mt-3 lg:mt-0 text-center lg:text-start">
        <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
        <p className="lg:w-3/4">
          {item.description.length > 100
            ? item.description.substring(0, 100) + '...'
            : item.description}
          {item.description.length > 100 && (
            <span
              href={`/question/detail/${item._id}`}
              className="text-primary-1 font-semibold"
            >
              Baca selengkapnya
            </span>
          )}
        </p>
        <p className="mt-2 text-primary-2 text-sm">
          {` ${item.username_author}`}
        </p>
      </div>
      <div>
        <div className="flex items-center mb-1">
          {/* <img src={avatar} alt="" className="w-12 h-12" /> */}
          <div className="flex flex-col">
            {/* <span className="font-semibold">John Doe</span> */}
            <div className="flex items-center">
              <i className="fa-solid fa-clock text-primary-1 mr-2" />
              <span className="text-sm">{renderTime()}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-1">
            <i className="fa-solid fa-message text-primary-1 mr-2" />
            {renderReply()}
          </div>
          <div className="flex w-52">
            <i className="fa-solid fa-tag text-primary-1 mr-2" />
            <div className="flex gap-2 flex-wrap">{renderTag()}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
