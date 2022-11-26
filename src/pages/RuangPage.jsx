import React from 'react';

// import api from '../config/api';

import Background from '../components/Background';
import AccessibilityPopup from '../components/AccessibilityPopup';

export default function RuangPage() {
  return (
    <>
      <AccessibilityPopup />
      <Background />
      <div>
        <p>Kelas/Ruang Diskusi:</p>
        <a href="/">Kembali ke Halaman Utama</a>
      </div>
    </>
  );
}
