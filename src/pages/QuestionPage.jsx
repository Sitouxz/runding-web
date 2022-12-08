/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-wrap-multilines */
import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import { useParams, Link } from 'react-router-dom';
import AccessibilityPopup from '../components/AccessibilityPopup';
import Navbar from '../layouts/Navbar';
import Background from '../components/Background';
import QuestionCard from '../components/QuestionCard';
import BackgroundAccessible from '../components/BackgroundAccessible';

import api from '../config/api';

export default function QuestionPage() {
  const [accessibility, setAccessibility] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
      .get(`/runding/posts/${param.id}`, {
        headers: {
          'auth-token': token, // the token is a variable which holds the token
        },
      })
      .then((response) => {
        setData(response.data);
        // eslint-disable-next-line no-console
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, []);

  return (
    <>
      <AccessibilityPopup
        accessibility={accessibility}
        setAccess={setAccessibility}
      />
      <Navbar />
      {renderAccesibility()}
      <div className="container mx-auto px-2 m-4">
        <Link to={`/ruang/${param.id}`} className="py-3">
          {'< Kembali'}
        </Link>
        <div className="flex flex-col lg:flex-row">
          <input
            type="text"
            placeholder="Cari ruang diskusi"
            className="border-2 border-primary-1 rounded-lg flex-grow py-1 px-2"
          />
          <Popup
            trigger={
              <button
                type="button"
                className="py-1 px-6 sm:px-10 bg-primary-1 rounded-md mt-2 lg:mt-0 lg:ml-2 text-white"
              >
                Buat baru
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div className="bg-white rounded-lg shadow-lg p-4 m-4 max-h-screen pb-24 overflow-scroll">
                <h2 className="font-semibold text-xl mb-4">
                  Ajukan pertanyaan
                </h2>
                <div>
                  <p>Cara mengajukan pertanyaan:</p>
                  <ol className="list-decimal list-inside">
                    <li>
                      Pastikan pertanyaan Anda belum pernah di bahas pada forum
                      ini, Anda bisa melakukan searching terlebih dahulu dengan
                      memasukkan kata kunci.
                    </li>
                    <li>
                      Mulailah dengan menuliskan judul pertanyaan Anda secara
                      singkat dan jelas
                    </li>
                    <li>
                      Sampaikan kendala permasalahan Anda dengan tidak
                      berbelit-belit
                    </li>
                    <li>
                      Tambahkan tag yang membantu memunculkan pertanyaan Anda
                      kepada anggota komunitas yang lain.
                    </li>
                  </ol>
                </div>
                <div className="mt-3">
                  <label
                    htmlFor="title"
                    className="font-semibold text-primary-1 text-lg"
                  >
                    Judul pertanyaan
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="border border-primary-1 rounded-lg flex-grow py-1 px-2 w-full"
                  />
                </div>
                <div className="mt-3">
                  <label
                    htmlFor="description"
                    className="font-semibold text-primary-1 text-lg"
                  >
                    Tuliskan peretanyaanmu
                  </label>

                  <textarea
                    id="description"
                    className="border border-primary-1 rounded-lg flex-grow py-1 px-2 w-full h-40"
                  />
                </div>
                <div className="mt-3">
                  <label
                    htmlFor="tags"
                    className="font-semibold text-primary-1 text-lg"
                  >
                    Tambahkan kata kunci
                  </label>
                  <span> *minimal 3 kata kunci</span>
                  <input
                    type="text"
                    id="tags"
                    className="border border-primary-1 rounded-lg flex-grow py-1 px-2 w-full"
                  />
                </div>
                <div className="mt-3 text-end">
                  <button
                    type="button"
                    className="mr-3 py-2 px-6 sm:px-10 border-2 border-primary-1 rounded-md mt-2 lg:mt-0 lg:ml-2 text-primary-1 font-semibold"
                    onClick={() => {
                      close();
                    }}
                  >
                    Batal
                  </button>
                  <button
                    type="button"
                    className="py-2 px-6 sm:px-10 bg-primary-1 shadow-lg shadow-primary-1 rounded-md mt-2 lg:mt-0 lg:ml-2 text-white"
                  >
                    Buat Diskusi
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
        <p className="mb-3">Parameter grup : {param.id}</p>
        <div>
          <h2 className="font-semibold mb-4">Semua Pertanyaan</h2>
          {loading ?? (
            <div className="flex justify-center items-center pt-20">
              <i className="fa-solid fa-circle-notch animate-spin text-3xl text-primary-1" />
            </div>
          )}
          {data.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.map((item) => (
                <QuestionCard
                  key={item._id}
                  item={item}
                  setAccess={setAccessibility}
                />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center pt-20">
              <p className="text-center text-primary-1">
                Belum ada pertanyaan yang diajukan
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
