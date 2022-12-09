import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import api from '../config/api';

import AccessibilityPopup from '../components/AccessibilityPopup';
import Navbar from '../layouts/Navbar';
import Background from '../components/Background';
import BackgroundAccessible from '../components/BackgroundAccessible';

export default function AdministratorInfoPage() {
  const [accessibility, setAccessibility] = useState(false);
  const [dataAdmin, setDataAdmin] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();

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
        // eslint-disable-next-line no-console
        console.log(response.data);
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

              if (dataAdmin.author || dataAdmin.member) {
                return (
                  <div>
                    <h2 className="font-semibold mt-auto mb-auto">Keterangan Admin</h2>
                    <div className="mt-2">
                      <p>{`Username : ${dataAdmin.data.username || 'no username'}`}</p>
                      <p>
                        Email to :
                        <a className="text-primary-1" href={`mailto:${dataAdmin.data.email}`} target="_blank" rel="noopener noreferrer">{` ${dataAdmin.data.email}`}</a>
                      </p>
                    </div>
                  </div>
                );
              }

              return (
                <div>
                  <p>Maaf, anda bukan anggota grup ini</p>
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
