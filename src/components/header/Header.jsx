import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assests/image Rafa.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <h3> Hello I´m</h3>
        <h1> Rafael Merayo</h1>
        <h3 className="text-light">Full Stack Developer</h3>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
