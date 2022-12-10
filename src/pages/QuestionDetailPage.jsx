/* eslint-disable comma-dangle */
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AccessibilityPopup from '../components/AccessibilityPopup';
import Navbar from '../layouts/Navbar';
import Background from '../components/Background';
import BackgroundAccessible from '../components/BackgroundAccessible';
import avatar from '../assets/img/avatar.png';
import QuestionResponseCard from '../components/QuestionResponseCard';

import api from '../config/api';

export default function QuestionDetailPage() {
  const [accessibility, setAccessibility] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commentForm, setCommentForm] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    document.body.style.setProperty('--color-primary', '#5D5FEF');
    document.body.style.setProperty('--color-secondary', '#636499');
    document.body.style.setProperty('--color-tertiary', '#121225');
  }, []);

  const renderAccesibility = () => {
    if (accessibility) {
      return <BackgroundAccessible noBig />;
    }
    return <Background noBig />;
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    api
      .get(`/posts/comments/${param.id}`, {
        headers: {
          'auth-token': token, // the token is a variable which holds the token
        },
      })
      .then((response) => {
        setData(response.data.data);
        // eslint-disable-next-line no-console
        // console.log(response);
        setLoading(false);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, []);

  const renderTime = () => {
    const date = new Date(data.post[0].createdAt);
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
    if (data.post[0].replies.length === 0) {
      return (
        <span className="text-primary-1 font-medium text-sm">
          Belum ada Pembahasan
        </span>
      );
    }
    if (data.post[0].replies.length === 1) {
      return (
        <span className="text-primary-1 font-medium text-sm">
          {data.post[0].replies.length}
          Pembahasan
        </span>
      );
    }
    return (
      <span className="text-primary-1 font-medium text-sm">
        {data.post[0].replies.length}
        Pembahasan
      </span>
    );
  };

  const renderTags = () => {
    if (data.post[0].tags.length === 0) {
      return (
        <span className="py-1 px-2 text-sm bg-primary-1 rounded-md text-white">
          Belum ada Tag
        </span>
      );
    }
    const tags = data.post[0].tags.map((tag) => (
      <span className="py-1 px-2 text-sm bg-primary-1 rounded-md text-white">
        {tag}
      </span>
    ));
    return tags;
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const token = localStorage.getItem('token');
    api
      .post(
        `/posts/comments/create/${param.id}`,
        {
          content_form: commentForm,
        },
        {
          headers: {
            'auth-token': token, // the token is a variable which holds the token
          },
        }
      )
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  const handleComment = (e) => {
    setCommentForm(e.target.value);
  };

  return (
    <>
      <AccessibilityPopup
        accessibility={accessibility}
        setAccess={setAccessibility}
      />
      <Navbar />
      {renderAccesibility()}
      {loading ? (
        <div className="flex justify-center items-center ml-auto pt-20">
          <i className="fa-solid fa-circle-notch animate-spin text-3xl text-primary-1" />
        </div>
      ) : (
        <div className="container mx-auto px-2 mt-4 mb-10">
          <button type="button" onClick={() => navigate(-1)} className="py-3">
            {'< Kembali'}
          </button>
          <div className="mt-3 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-3 w-full ">
            <div className="w-24 flex justify-center items-center">
              <img src={avatar} alt="" />
            </div>
            <div className="flex-grow flex flex-col justify-center items-center lg:items-start lg:block">
              <h3 className="font-semibold mb-2 text-xl">
                {data.post[0].username_author}
              </h3>
              <div className="flex items-center mb-1">
                <i className="fa-solid fa-clock mr-3 w-5 h-5 flex justify-center items-center text-xl text-primary-1" />
                <span className=" font-medium text-gray-500">
                  {renderTime()}
                </span>
              </div>
              <div className="flex items-center mb-1">
                <i className="fa-solid fa-message mr-3 w-5 h-5 flex justify-center items-center text-xl text-primary-1" />
                {renderReply()}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-b border-primary-1 pb-3 justify-between items-center lg:items-start mt-3 ">
            <div className=" mt-3 lg:mt-0 text-center lg:text-start">
              <h3 className="font-semibold text-xl mb-3">
                {data.post[0].title}
              </h3>
              <p>{data.post[0].description}</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <i className="fa-solid fa-tag flex justify-center items-center text-xl text-primary-1" />
                {renderTags()}
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-center gap-3">
              <img src={avatar} alt="" className="w-10 h-10" />
              <span className="font-semibold">{data.post[0].author}</span>
            </div>
            <div className="border-b border-primary-1 pb-3">
              <textarea
                name=""
                id=""
                cols="20"
                rows="10"
                className="border-primary-1 border rounded-lg w-full p-3 mt-3 h-40 resize-none"
                placeholder="Tulis komentar kamu disini"
                onChange={handleComment}
              />
              {
                // eslint-disable-next-line react/jsx-wrap-multilines
                isSubmitting ? (
                  <button
                    type="button"
                    className="bg-primary-1 text-white py-2 w-40 rounded-lg mt-3 shadow-lg shadow-primary-1"
                    disabled
                  >
                    <i className="fa-solid fa-circle-notch animate-spin text-white" />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="bg-primary-1 text-white py-2 w-40 rounded-lg mt-3 shadow-lg shadow-primary-1"
                    onClick={handleCommentSubmit}
                  >
                    Kirim
                  </button>
                )
              }
            </div>
          </div>
          <div className="mt-3 flex flex-col justify-center items-center">
            {data.comments.length === 0 ? (
              <span className="text-primary-1 font-medium text-lg">
                Belum ada Pembahasan
              </span>
            ) : (
              <div className="flex flex-col w-full">
                {data.comments.map((comment) => (
                  <QuestionResponseCard key={comment.id} data={comment} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
