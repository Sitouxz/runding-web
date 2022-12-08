import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import AccessibilityPopup from '../components/AccessibilityPopup';
import Navbar from '../layouts/Navbar';
import Background from '../components/Background';
import BackgroundAccessible from '../components/BackgroundAccessible';

export default function AboutPage() {
  const [accessibility, setAccessibility] = useState(false);

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

  return (
    <>
      <AccessibilityPopup accessibility={accessibility} setAccess={setAccessibility} />
      <Navbar />
      {renderAccesibility()}
      <div className="container mx-auto px-2">
        <div className="mb-5 lg:w-1/2">
          <h1 className="text-3xl font-semibold mb-3">Apa itu Runding</h1>
          <p>
            Maaf halaman tidak ditemukan atau anda tidak disahkan mengakses halaman tersebut.
          </p>
          <Link
            className="px-3 py-2 text-md font-medium leading-snug text-primary-3 lg:text-white hover:opacity-75"
            to="/"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </>
  );
}
