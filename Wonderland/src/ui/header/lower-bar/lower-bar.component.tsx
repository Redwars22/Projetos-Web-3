import React from 'react';
import AuthorBadgeComponent from './author-badge/author-badge.component';
import './lower-bar.style.css';

export default function LowerBarComponent() {
  function showImage() {
    let URL = (document.getElementById('url-box') as HTMLInputElement).value;
    //window.alert(URL);
    document.getElementById('image-area').style['background-image'] =
      'url(' + URL + ')';
  }

  return (
    <div className="lower-bar-container">
      <img
        src="https://raw.githubusercontent.com/Redwars22/Projetos-Web-3/main/resx/wonderland.png"
        className="app-logo"
      />
      <div className="insert-url-container">
        <input
          className="url-box"
          id="url-box"
          placeholder="Digite aqui o endereço da imagem à qual você quer aplicar efeitos"
        />
        <button
          className="light-blue darken-3 waves-effect waves-light btn url-button"
          onClick={showImage}
        >
          USAR
        </button>
      </div>
      <AuthorBadgeComponent />
    </div>
  );
}
