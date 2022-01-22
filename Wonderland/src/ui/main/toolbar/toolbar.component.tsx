import React from 'react';
import './toolbar.style.css';

export default function ToolbarComponent() {
  let visibility: boolean = true;
  let rotation: number = 0;

  function saveImageURL() {
    let URL = (document.getElementById('url-box') as HTMLInputElement).value;
    localStorage.setItem('image-url', URL);
  }

  function openSavedImageURL() {
    let URL = localStorage.getItem('image-url');
    (document.getElementById('url-box') as HTMLInputElement).value = URL;
    document.getElementById('image-area').style['background-image'] =
      'url(' + URL + ')';
  }

  function resetImageToDefault() {
    let toDeleteOrNot = confirm(
      'Tem certeza de que deseja deletar essa imagem? AVISO: Esse processo é irreversível!'
    );

    if (toDeleteOrNot) {
      document.getElementById('image-area').style['background-image'] =
        'url(https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png)';
      localStorage.removeItem('image-url');
    }
  }

  function setRotation(argument: number) {
    switch (argument) {
      case 0:
        rotation++;
        return 0;
        break;
      case 1:
        rotation++;
        return 90;
        break;
      case 2:
        rotation++;
        return 180;
        break;
      case 3:
        rotation = 0;
        return 270;
        break;
    }
  }

  function rotateImage() {
    document.getElementById('image-area').style['transform'] =
      'rotate(' + setRotation(rotation).toString() + 'deg)';
  }

  function applyCustomCSS() {
    let customCode = document.getElementById('css-editor').innerText;
    document.getElementById('image-area-container').innerHTML +=
      '<style>' + customCode + '</style>';
  }

  function toggleVisibility() {
    if (visibility) {
      document.getElementById('image-area').style.visibility = 'hidden';
      visibility = false;
    } else {
      document.getElementById('image-area').style.visibility = 'visible';
      visibility = true;
    }
  }

  function sendFeedback() {
    let message: string = prompt(
      'Escreva a mensagem que você deseja enviar aqui:'
    );
    window.open(
      'mailto:andrewpereira.megabyte@gmail.com?subject=Bug report/Sugestões&body=' +
        message
    );
  }

  function aboutBox() {
    window.alert(
      'ProjectWonderland. Criado por André Pereira(@Redwars22) usando ReactJS e Materialize. Fonte usada: JetBrains Mono.'
    );
  }

  function helpPage() {
    window.open(
      'https://redwars22.notion.site/AJUDA-DO-PROJECT-WONDERLAND-c655ee8d467b4a519efd94b28e49c435'
    );
  }

  return (
    <div className="left-toolbar">
      <button className="toolbar-button" onClick={saveImageURL}>
        <i className="material-icons">save</i>
      </button>
      <button className="toolbar-button" onClick={openSavedImageURL}>
        <i className="material-icons">folder_open</i>
      </button>
      <button className="toolbar-button" onClick={resetImageToDefault}>
        <i className="material-icons">delete_forever</i>
      </button>
      <button className="toolbar-button" onClick={rotateImage}>
        <i className="material-icons">rotate_left</i>
      </button>
      <button className="toolbar-button" onClick={applyCustomCSS}>
        <i className="material-icons">filter</i>
      </button>
      <button className="toolbar-button" onClick={toggleVisibility}>
        <i className="material-icons">visibility_off</i>
      </button>
      <button className="toolbar-button" onClick={sendFeedback}>
        <i className="material-icons">feedback</i>
      </button>
      <button className="toolbar-button" onClick={aboutBox}>
        <i className="material-icons">info</i>
      </button>
      <button className="toolbar-button" onClick={helpPage}>
        <i className="material-icons">help</i>
      </button>
    </div>
  );
}
