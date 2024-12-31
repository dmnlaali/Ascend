import React from 'react';
import './navBar.css';

export default function NavBar() {
  return (
    <>
    <h1 className="logo">Ascend</h1>
    <nav>
      <div className="nav-links">
        <a className="home">Home</a>
        <a className="about">About</a>
        <a className="contact">Contact</a>
        <button>Login</button>
      </div>
    </nav>
    </>
  );
}
