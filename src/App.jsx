/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoutes';

// import halaman-halaman website/pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RuangPage from './pages/RuangPage';
import AboutPage from './pages/AboutPage';
import DiscussionDetails from './pages/DiscussionDetails';
import QuestionPage from './pages/QuestionPage';
import QuestionDetailPage from './pages/QuestionDetailPage';
import ProfilePage from './pages/ProfilePage';
import CreateGroupPage from './pages/CreateGroupPage';
import ManageGroupPage from './pages/ManageGroupPage';
import JoinedGroupPage from './pages/JoinedGroupPage';
import NotificationPage from './pages/NotificationPage';
import AdministratorGroupPage from './pages/AdministratorGroupPage';
import AdministratorInfoPage from './pages/AdministratorInfoPage';
import Web404Page from './pages/Web404Page';

/*
  Routes dalam aplikasi web ini terdiri dari :
  "/" - Route halaman beranda atau home
  "/login" - Halaman login, tanpa login user tidak dapat mengakses private routes
  "/register" - Halaman registrasi user baru
  "/about" - Route halaman deskripsi aplikasi dan tentang tim pengembang
  "/profile" - Halaman menampilkan data user saat ini dan mengakses group yang di manage
  "/manage" - Halaman yang menampilkan setiap ruang diskusi yang telah dibuat user/user merupakan
              administrator sehingga user dapat mengakses admin settings atau membuka halaman
              question
  "/joined" - Menampilkan tiap ruang diskusi dimana user telah bergabung atau user merupakan admin
  "/notifications" - Halaman notifikasi yang menampilkan ruang-ruang diskusi baru dengan websocket
  "/ruang" - Menampilkan ruang diskusi dimana user dapat bergabung ke tiap ruang diskusi tersebut
  "/create" - Membuat ruang diskusi baru dengan form untuk menginput subject, deskripsi,
              dan jenis ruang diskusi serta menambahkan image sebagai cover grup
  "/ruang/:id" - Menampilkan detail ruang diskusi dengan parameter route dimana user dapat
                  mengakses halaman pertanyaan, meeting dan contact admin melalui halaman ini
  "/ruang/administrator/:id" - Page administrator untuk menambahkan meeting baru,
                                menghapus meeting, dan menghapus ruang diskusi (permanen)
  "/ruang/admininfo/:id" - Halaman untuk menampilkan data kontak administrator ruang diskusi
  "ruang/question/:id" - Halaman menampilkan pertanyaan dalam ruang diskusi, dimana user dapat
                          membuat pertanyaan baru dengan judul, deskripsi pertanyaan, dan tags
  "/question/detail/:id" - Menampilkan detail suatu pertanyaan, dimana balasan atau jawaban dari
                            user lain akan ditampilkan, serta user dapat menambahkan balasan baru
  "*" - Route untuk menangani not found/unknown routes yang akan redirect ke halaman not found
*/

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/create"
          element={
            <PrivateRoute>
              <CreateGroupPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/manage"
          element={
            <PrivateRoute>
              <ManageGroupPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/joined"
          element={
            <PrivateRoute>
              <JoinedGroupPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <PrivateRoute>
              <NotificationPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/ruang"
          element={
            <PrivateRoute>
              <RuangPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/ruang/:id"
          element={
            <PrivateRoute>
              <DiscussionDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/ruang/question/:id"
          element={
            <PrivateRoute>
              <QuestionPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/ruang/administrator/:id"
          element={
            <PrivateRoute>
              <AdministratorGroupPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/ruang/admininfo/:id"
          element={
            <PrivateRoute>
              <AdministratorInfoPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/question/detail/:id"
          element={
            <PrivateRoute>
              <QuestionDetailPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route path="*" exact element={<Web404Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
