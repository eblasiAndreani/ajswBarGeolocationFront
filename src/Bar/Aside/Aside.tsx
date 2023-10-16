import React from 'react';
import './Aside.css'
import Footer from './Footer/Footer';
import NavigationMenu from '../../Common/Navigation/NavigationMenu';

const Header = ({ title, imageSrc, menuItems}) => {
  return (
    <div id="vertical-header">
      <h1>{title}</h1>
      <div className="circular-image">
        <img src={imageSrc} alt="Foto de perfil" />
      </div>
      <NavigationMenu
        menuItems={menuItems} />
      <Footer />
    </div>
  );
};

export default Header;