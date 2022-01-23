import React from 'react';
import './footer.style.css';

export default function FooterComponent() {
  return (
    <div className="footer">
      <div className="footer-elements">
        <span>
          Criado por André Pereira usando ReactJS, TypeScript e Semantic UI.
        </span>
        <div className="ui buttons">
          <a
            className="ui red button"
            href="https://github.com/Redwars22/Projetos-Web-3"
          >
            CÓDIGO FONTE
          </a>
          <a className="ui blue button" href="https://semantic-ui.com/">
            SEMANTIC UI
          </a>
        </div>
      </div>
    </div>
  );
}
