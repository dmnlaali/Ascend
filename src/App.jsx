import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';  // Import Layout
import Register from './register/register.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define routes with the Layout component */}
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <div className="main-content">
                <h1 className="main-ascend">What is Ascend?</h1>
                <p className="main-about">
                  Ascend is a habit-building web app that incorporates gamification to help users stay motivated and achieve their personal goals. Users can set habits, track progress, and earn rewards as they complete tasks, fostering a sense of achievement. With features like streak tracking, milestones, and customizable challenges, Ascend makes building better habits engaging and fun. Designed for simplicity and productivity, it's the perfect tool for anyone looking to improve their daily routines and reach new heights.
                </p>
                <a href="/register" className='start-btn'>Get Started</a>  {/* Link to register page */}
              </div>
            }
          />
        </Route>

        {/* Register page without Layout and without NavBar */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
