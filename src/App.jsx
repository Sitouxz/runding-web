/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import PrivateRoute from './routes/PrivateRoutes';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import RuangPage from './pages/RuangPage';
import AboutPage from './pages/AboutPage';
import DiscussionDetails from './pages/DiscussionDetails';
import QuestionPage from './pages/QuestionPage';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/ruang" element={<RuangPage />} />
        <Route path="/detail" element={<DiscussionDetails />} />
        <Route path="/quest" element={<QuestionPage />} />
        <Route
          path="/home"
          element={
            // <PrivateRoute>
            <HomePage />
            // </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            // <PrivateRoute>
            <AboutPage />
            // </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
