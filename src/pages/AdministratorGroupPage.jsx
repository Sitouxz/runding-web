import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import api from '../config/api';

import AccessibilityPopup from '../components/AccessibilityPopup';
import Navbar from '../layouts/Navbar';
import Background from '../components/Background';
import BackgroundAccessible from '../components/BackgroundAccessible';

export default function AdministragorGroupPage() {
  const [accessibility, setAccessibility] = useState(false);
  const [dataAdmin, setDataAdmin] = useState([]);
  const [meetingform, setMeetingForm] = useState('');
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    api
      .get(`/runding/administrator/${params.id}`, {
        headers: {
          'auth-token': token, // the token is a variable which holds the token
        },
      })
      .then((response) => {
        setDataAdmin(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
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

  const newMeeting = (e) => {
    e.preventDefault();
    if (meetingform) {
      const token = localStorage.getItem('token');
      api
        .put(`/runding/newmeeting/${params.id}`, {
          meeting_form: meetingform,
        }, {
          headers: {
            'auth-token': token, // the token is a variable which holds the token
          },
        })
        .then((response) => {
        // eslint-disable-next-line no-console
          console.log(response.data);
          navigate(`/ruang/${params.id}`);
        })
        .catch((error) => {
        // eslint-disable-next-line no-console
          console.log(error);
        });
    }
  };

  const removeMeeting = () => {
    const token = localStorage.getItem('token');
    api
      .put(`/runding/removemeeting/${params.id}`, 'mytoken', {
        headers: {
          'auth-token': token, // the token is a variable which holds the token
        },
      })
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response.data);
        navigate(`/ruang/${params.id}`);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  const deleteRunding = () => {
    const token = localStorage.getItem('token');
    api
      .delete(`/runding/${params.id}`, {
        headers: {
          'auth-token': token, // the token is a variable which holds the token
        },
      })
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response.data);
        navigate('/ruang');
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  return (
    <>
      <AccessibilityPopup accessibility={accessibility} setAccess={setAccessibility} />
      <Navbar />
      {renderAccesibility()}
      <div className="container mx-auto px-2 mt-4">
        <Link to={`/ruang/${params.id}`} className="py-3">
          {'< Kembali'}
        </Link>
        <div className="mt-3 bg-white shadow-lg border-2 rounded-lg p-3">
          <div className="mt-2">
            {
            (() => {
              if (loading) {
                return (
                  <div className="flex justify-center items-center pt-2">
                    <i className="fa-solid fa-circle-notch animate-spin text-3xl text-primary-1" />
                  </div>
                );
              }

              if (dataAdmin.author) {
                return (
                  <div>
                    <h2 className="font-semibold mt-auto mb-auto">Administrative Group Settings</h2>
                    <p className="mt-5 ml-1 text-sm text-zinc-400">
                      *Click
                      <a className="text-black hover:text-primary-2" href="https://meet.google.com/new" target="_blank" rel="noopener noreferrer"> here </a>
                      to open new google meet (check the join link)
                    </p>
                    <div className="flex flex-col lg:flex-row mb-4 mt-1">
                      <form onSubmit={newMeeting} className="flex-grow">
                        <input
                          required
                          type="text"
                          placeholder="Masukkan link meeting"
                          className="border-2 border-primary-1 rounded-lg flex-grow py-1 px-2 w-10/12 ml-1"
                          onChange={(e) => setMeetingForm(e.target.value)}
                        />
                        <button
                          type="submit"
                          className="py-1 px-6 sm:px-10 bg-primary-1 rounded-md mt-2 ml-2 text-white"
                        >
                          Add new Meeting
                        </button>
                      </form>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeMeeting()}
                      className="py-1 px-6 sm:px-10 bg-red-700 rounded-md text-white mt-2 ml-2"
                    >
                      Remove Meeting
                    </button>
                    <div className="flex items-center justify-center h-20 mt-5">
                      <button
                        className="py-2 px-6 text-white bg-red-700 rounded-md"
                        type="button"
                        onClick={() => setShowModal(true)}
                      >
                        Delete Group
                      </button>
                    </div>
                    {showModal ? (
                      <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                          role="presentation"
                          className="fixed inset-0 w-full h-full bg-black opacity-40"
                          onClick={() => setShowModal(false)}
                        />
                        <div className="flex items-center min-h-screen px-4 py-8">
                          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                            <div className="mt-3 sm:flex">
                              <div className="flex items-center justify-center flex-none w-12 h-12 mx-5 bg-red-100 rounded-full">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-6 h-6 text-red-600"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              <div className="mt-2 text-center sm:ml-1 sm:text-left">
                                <h4 className="text-lg font-medium text-gray-800">
                                  Delete Ruang Diskusi Group
                                </h4>
                                <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                                  Are you sure? This cannot be reversed!
                                </p>
                                <div className="items-center gap-2 mt-3 sm:flex">
                                  <button
                                    type="button"
                                    className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                    // eslint-disable-next-line no-console
                                    onClick={() => deleteRunding()}
                                  >
                                    Delete
                                  </button>
                                  <button
                                    type="button"
                                    className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                    // eslint-disable-next-line no-console
                                    onClick={() => { setShowModal(false); console.log('Delete canceled'); }}
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              }

              return (
                <div>
                  <p>Maaf, anda bukan admin grup ini</p>
                </div>
              );
            })()
            }
          </div>
        </div>
      </div>
    </>
  );
}

// const handleDelete = () => {
//   const token = localStorage.getItem('token');
//   api
//     .delete(`/runding/${params.id}`, {
//       headers: {
//         'auth-token': token, // the token is a variable which holds the token
//       },
//     })
//     .then(() => {
//       // eslint-disable-next-line no-console
//       // console.log(response.data);
//       navigate('/ruang');
//     })
//     .catch((error) => {
//       // eslint-disable-next-line no-console
//       console.log(error);
//     });
// };

// {
//   (() => {
//     if (data.author) {
//       return (
//         <button
//           type="button"
//           onClick={handleDelete}
// eslint-disable-next-line max-len
//           className="bg-red-700 text-white font-semibold px-6 py-3 flex-grow rounded-lg shadow-lg shadow-primary-1 mr-3"
//         >
//           Hapus Grup
//         </button>
//       );
//     }

//     return (
//       <div />
//     );
//   })();
// }
