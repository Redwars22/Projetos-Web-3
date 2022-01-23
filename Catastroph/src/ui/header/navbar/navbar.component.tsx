import React from 'react';
import './navbar.style.css';

export default function NavbarComponent() {
  function about() {
    window.alert(
      'ProjectCatastroph. Feito por @Redwars22(André Pereira) usando tecnologias ReactJS, Semantic UI e TypeScript. O código fonte desta aplicação é completamente livre, isto é, você pode baixá-lo e modificá-lo como quiser.'
    );
  }

  function help() {
    window.alert(
      'A interface é composta por 3 botões: decrementar, incrementar e resetar. O botão [incrementar] aumenta o valor mostrado na tela, somando a ele a taxa de incremento (que é 1, por padrão). O botão [decrementar] faz o oposto, diminuindo-o. O botão [resetar] faz o valor retornar a 0. Você pode mudar a taxa de incremento padrão para qualquer número que desejar digitando-o no input abaixo dos botões.'
    );
  }

  return (
    <div className="navbar-container">
      <a
        href="https://redwars22.github.io/Website/index.html"
        className="navbar-link no-margin"
      >
        O AUTOR
      </a>
      <a onClick={help} className="navbar-link">
        AJUDA
      </a>
      <a onClick={about} className="navbar-link">
        SOBRE
      </a>
      <a href="mailto:andrewpereira.megabyte@gmail.com" className="navbar-link">
        FEEDBACK
      </a>
    </div>
  );
}
