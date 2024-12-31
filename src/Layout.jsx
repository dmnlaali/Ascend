import React from 'react';
import NavBar from './navBar/navBar.jsx';
import { Outlet } from 'react-router-dom'; // Used to render child routes

const Layout = () => {
  return (
    <div>
      <NavBar />  {/* Render NavBar only here */}
      <Outlet />  {/* Render child components/routes here */}
    </div>
  );
};

export default Layout;
