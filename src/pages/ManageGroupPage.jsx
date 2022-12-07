import React, { useState, useEffect } from 'react';

import AccessibilityPopup from '../components/AccessibilityPopup';
import Navbar from '../layouts/Navbar';
import Background from '../components/Background';
import BackgroundAccessible from '../components/BackgroundAccessible';

import MyGroupCard from '../components/MyGroupCard';

export default function ManageGroupPage() {
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
      <div className="container mx-auto px-2 mt-4 mb-10">
        <a href="/home" className="py-3">
          {'< Kembali'}
        </a>
        <span className="text-primary-1 font-medium"> | Ruang diskusiku</span>
        <div>
          <MyGroupCard />
          <MyGroupCard />
          <MyGroupCard />
          <MyGroupCard />
        </div>
      </div>
    </>
  );
}
