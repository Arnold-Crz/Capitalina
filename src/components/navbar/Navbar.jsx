import { useState } from 'react';

import './navbar.scss';

import Navmenu from '../../assets/navmenu.svg';
import Navclose from '../../assets/navclose.svg';
import Facebook from '../../assets/face.svg';
import Instagram from '../../assets/insta.svg';

import Logo from '../../assets/logo.png';
import LogoTwo from '../../assets/logotwo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="logo" />
        <h1>
          Capi<span>talina</span>
        </h1>
      </div>
      <ul className={isOpen ? 'active' : ''}>
        <div>
          <img src={Navclose} alt="menu" onClick={handleOpen} />
        </div>
        <li>
          <a href="#inicio">Inicio</a>
          <a href="#menu">Menu</a>
          <a href="#ubicacion">Ubicacion</a>
          <a href="#horarios">Horarios</a>
          <a href="#contacto">Contacto</a>
          <div className="btnMenu">
            <a href="#">Descarga Menu</a>
          </div>
          <div className="btnSocial">
            <img src={LogoTwo} alt="LogoTwo" />
            <a href="#">
              <img src={Instagram} alt="Instagram" />
              Instagram
            </a>
            <a href="#">
              <img src={Facebook} alt="Instagram" />
              facebook
            </a>
          </div>
        </li>
      </ul>
      <div className="navbar__menu">
        <img src={Navmenu} alt="menu" onClick={handleOpen} />
      </div>
    </nav>
  );
}

export default Navbar;
