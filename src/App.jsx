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
import JoinedGroupPage from './pages/JoinedGroupPage';
import NotificationPage from './pages/NotificationPage';
import AdministratorGroupPage from './pages/AdministratorGroupPage';
import AdministratorInfoPage from './pages/AdministratorInfoPage';
import Web404Page from './pages/Web404Page';
// import GroupDetailPage from './pages/GroupDetailPage';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/quest/id" element={<QuestionDetailPage />} />
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

        <Route path="*" exact element={<Web404Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
