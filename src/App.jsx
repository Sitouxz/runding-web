/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoutes';

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
import AdministratorGroupPage from './pages/AdministratorGroupPage';
import Web404Page from './pages/Web404Page';
// import GroupDetailPage from './pages/GroupDetailPage';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/detail" element={<DiscussionDetails />} />
        <Route path="/quest" element={<QuestionPage />} />
        <Route path="/quest/id" element={<QuestionDetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/create" element={<CreateGroupPage />} />
        <Route path="/manage" element={<ManageGroupPage />} />
        <Route path="/about" element={<AboutPage />} />
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
          path="/question/detail/:questionid"
          element={
            <PrivateRoute>
              <QuestionDetailPage />
            </PrivateRoute>
          }
        />
        <Route path="*" exact element={<Web404Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
