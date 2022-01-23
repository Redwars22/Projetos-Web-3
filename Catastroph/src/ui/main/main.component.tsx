import React from 'react';
import ButtonsComponent from './buttons/buttons.component';
import './main.style.css';

export default function MainComponent() {
  return (
    <div className="main">
      <div>
        <span className="number" id="number">
          0
        </span>
      </div>
      <ButtonsComponent />
      <div className="form">
        <label htmlFor="step">Taxa de incremento/decremento:</label>
        <input type="number" id="step" min="0" defaultValue={1} />
      </div>
    </div>
  );
}
