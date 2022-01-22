import React from 'react';
import './upper-bar.style.css';

export default function UpperBarComponent() {
  let j: number = 100;

  function hideApp() {
    document.getElementById('app-container').style['visibility'] = 'hidden';
  }

  return (
    <div className="upper-bar-container">
      <div className="window-buttons-container">
        <button className="round-button red-btn" onClick={hideApp}></button>
        <button className="round-button yellow-btn"></button>
        <button className="round-button green-btn"></button>
      </div>
      <span className="app-title">ProjectWonderland</span>
    </div>
  );
}
