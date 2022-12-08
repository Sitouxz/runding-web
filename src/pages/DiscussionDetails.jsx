/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable comma-dangle */
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import Background from '../components/Background';
import avatar from '../assets/img/avatar.png';
import AccessibilityPopup from '../components/AccessibilityPopup';
import BackgroundAccessible from '../components/BackgroundAccessible';

import api from '../config/api';

export default function DiscussionDetails() {
  const [accessibility, setAccessibility] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const navigate = useNavigate();

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
      .get(`/runding/${params.id}`, {
        headers: {
          'auth-token': token, // the token is a variable which holds the token
        },
      })
      .then((response) => {
        setData(response.data);
        // eslint-disable-next-line no-console
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, []);

  const userJoin = () => {
    const token = localStorage.getItem('token');
    api
      .put(`/runding/join/${params.id}`, 'mytoken', {
        headers: {
          'auth-token': token, // the token is a variable which holds the token
        },
      })
      .then(() => {
        // eslint-disable-next-line no-console
        // console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  const userLeave = () => {
    const token = localStorage.getItem('token');
    api
      .put(`/runding/leave/${params.id}`, 'mytoken', {
        headers: {
          'auth-token': token, // the token is a variable which holds the token
        },
      })
      .then(() => {
        // eslint-disable-next-line no-console
        // console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  return (
    <>
      <AccessibilityPopup
        accessibility={accessibility}
        setAccess={setAccessibility}
      />
      <Navbar />
      {renderAccesibility()}
      <div className="container mx-auto px-2 mt-4">
        <Link to="/ruang" className="py-3">
          {'< Kembali'}
        </Link>
        {loading ? (
          <div className="flex justify-center items-center pt-20">
            <i className="fa-solid fa-circle-notch animate-spin text-3xl text-primary-1" />
          </div>
        ) : (
          <div className="mt-3 bg-white shadow-lg border-2 rounded-lg p-3">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-3 w-full ">
              <div className="w-24 flex justify-center items-center">
                <img
                  src={
                    data.data.logo_grup !== undefined
                      ? data.data.logo_grup
                      : avatar
                  }
                  alt=""
                />
              </div>
              <div className="flex-grow flex flex-col justify-center items-center lg:items-start lg:block">
                <h3 className="font-semibold mb-2">{data.data.subject}</h3>
                <div className="flex items-center mb-1">
                  <i className="fa-solid fa-user mr-3 w-5 h-5 flex justify-center items-center text-xl" />
                  <span className="text-primary-1 font-medium">
                    {`${
                      data.data.peserta !== undefined
                        ? data.data.peserta.length
                        : '0'
                    } peserta`}
                  </span>
                </div>
                <div className="flex items-center mb-1">
                  <i className="fa-solid fa-users mr-3 w-5 h-5 flex justify-center items-center text-xl" />
                  <span className="font-medium">
                    Dibuat oleh
                    <span className="text-primary-1">
                      {' '}
                      {data.data.admin_username}
                    </span>
                  </span>
                </div>
              </div>
              {data.member ? (
                <div className="flex justify-center lg:block w-full lg:w-auto">
                  <span>
                    <i className="fa-solid fa-calendar mr-2" />
                    {data.data.createdAt.slice(0, 10)}
                  </span>
                </div>
              ) : (
                ''
              )}
            </div>
            <div className="mt-5">
              <p>{data.data.deskripsi || ''}</p>
            </div>
            <div className="mt-5 text-end">
              {
                (() => {
                  if (data.member || data.author) {
                    if (data.data.meetLink) {
                      return (
                        <button
                          type="button"
                          onClick={() => window.open(`https://${data.data.meetLink}`, '_blank', 'noopener,noreferrer')}
                          className="bg-primary-1 text-white font-semibold px-6 py-3 flex-grow rounded-lg shadow-lg shadow-primary-1 mr-3"
                        >
                          Open Meeting
                        </button>
                      );
                    } if (!data.data.meetLink) {
                      return (
                        <button
                          disabled
                          type="button"
                          className="bg-white text-black font-semibold px-6 py-3 flex-grow rounded-lg shadow-lg shadow-primary-1 mr-3"
                        >
                          No Meeting
                        </button>
                      );
                    }

                    return (
                      <div />
                    );
                  }

                  return (
                    <div />
                  );
                })()
              }
              {
                data.member || data.author ? (
                  <Link
                    to={`/ruang/question/${params.id}`}
                    className="bg-primary-1 text-white font-semibold px-6 py-3 flex-grow rounded-lg shadow-lg shadow-primary-1 mr-3"
                  >
                    Questions
                  </Link>
                ) : (
                  <button
                    disabled
                    type="button"
                    className="bg-white text-black font-semibold px-6 py-3 flex-grow rounded-lg shadow-lg shadow-primary-1 mr-3"
                  >
                    Not a Member
                  </button>
                )
              }
              {
                (() => {
                  if (data.author) {
                    return (
                      <button
                        type="button"
                        onClick={() => navigate(`/ruang/administrator/${params.id}`)}
                        className="bg-primary-1 text-green-400 font-semibold px-6 py-3 flex-grow rounded-lg shadow-lg shadow-primary-1"
                      >
                        Admin
                      </button>
                    );
                  } if (!data.member) {
                    return (
                      <button
                        type="button"
                        className="bg-primary-1 text-white font-semibold px-6 py-3 flex-grow rounded-lg shadow-lg shadow-primary-1"
                        onClick={userJoin}
                      >
                        Bergabung
                      </button>
                    );
                  } if (data.member) {
                    return (
                      <button
                        type="button"
                        className="bg-primary-1 text-white font-semibold px-6 py-3 flex-grow rounded-lg shadow-lg shadow-primary-1"
                        onClick={userLeave}
                      >
                        Keluar
                      </button>
                    );
                  }

                  return (
                    <div />
                  );
                })()
              }
            </div>
          </div>
        )}
      </div>
    </>
  );
}
