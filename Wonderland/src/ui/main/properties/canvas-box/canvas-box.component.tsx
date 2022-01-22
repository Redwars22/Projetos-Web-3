import React from 'react';
import './canvas-box.style.css';
import '../properties.style.css';

export default function CanvasBoxContainer() {
  function changeSizeOfCanvas() {
    let width = (document.getElementById('width') as HTMLInputElement).value;
    let height = (document.getElementById('height') as HTMLInputElement).value;
    document.getElementById('image-area').style.minWidth =
      width.toString() + 'px';
    document.getElementById('image-area').style.minHeight =
      height.toString() + 'px';
  }

  return (
    <div className="form-layout">
      <div className="horizontal-layout">
        <div className="form-component">
          <label htmlFor="width">Largura</label>
          <input
            id="width"
            className="form-input"
            type="number"
            min="0"
            defaultValue="719"
          />
        </div>
        <div className="form-component">
          <label htmlFor="height">Altura</label>
          <input
            id="height"
            className="form-input"
            type="number"
            min="0"
            defaultValue="410"
          />
        </div>
      </div>
      <button
        className="waves-effect waves-light btn light-blue darken-3"
        onClick={changeSizeOfCanvas}
      >
        APLICAR
      </button>
    </div>
  );
}
