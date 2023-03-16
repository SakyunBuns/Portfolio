import React from 'react'
import { Link } from 'react-router-dom';
import Hamburger from './HamburgerMenu';

export default function NavBar() {
  return (
    <>
      <div className='nav'>
        <div className="info">
          <img src="./src/images/mitchPixel.png" alt="PhotoProfil" id="profil" />
        </div>
        <div className='side'>
          <p>Nathaelle Fournier's Portfolio</p>
          <div className="menu" >
            <Link to="/">Home</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
          </div>
        </div>
      </div>
      <Hamburger />
    </>
  );
}