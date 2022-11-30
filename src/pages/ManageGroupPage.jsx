import React from 'react';

import AccessibilityPopup from '../components/AccessibilityPopup';
import Navbar from '../layouts/Navbar';
import Background from '../components/Background';

import MyGroupCard from '../components/MyGroupCard';

export default function ManageGroupPage() {
  return (
    <>
      <AccessibilityPopup />
      <Navbar />
      <Background noBig />
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
