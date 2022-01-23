import React from 'react';
import './header.style.css';
import NavbarComponent from './navbar/navbar.component';

export default function HeaderComponent() {
  return (
    <div className="header">
      <img
        src="https://raw.githubusercontent.com/Redwars22/Projetos-Web-3/main/resx/catastroph.png"
        width="70px"
      />
      <NavbarComponent />
    </div>
  );
}
