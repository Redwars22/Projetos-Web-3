import React from 'react';
import './css-editor.style.css';

export default function CSSEditorComponent() {
  return (
    <div className="css-editor-container">
      <div className="css-editor" id="css-editor" contentEditable="true">
        <code>
          .image-area &#123;
          <br />
          /*Insira CSS customizado aqui*/
          <br />
          &#125;
        </code>
      </div>
      <div className="css-editor-info">
        <p>
          Para aplicar o código CSS customizado à imagem, clique no botão
          <i className="material-icons">filter</i> na barra esquerda.
        </p>
      </div>
    </div>
  );
}
