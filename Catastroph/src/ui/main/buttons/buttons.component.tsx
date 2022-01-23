import React from 'react';
import './buttons.style.css';

export default function ButtonsComponent() {
  let value = 0;

  function colorize() {
    if (value < 0) {
      return '#EB4034';
    } else if (value == 0) {
      return '#7D7D7D';
    } else if (value > 0) {
      return '#00F54E';
    }
  }

  function update(newValue: string) {
    document.getElementById('number').innerText = newValue;
    document.getElementById('number').style.color = colorize();
  }

  function getIncrementStep() {
    return parseInt(
      (document.getElementById('step') as HTMLInputElement).value
    );
  }

  function decrement() {
    value -= getIncrementStep();
    update(value.toString());
  }

  function increment() {
    value += getIncrementStep();
    update(value.toString());
  }

  function reset() {
    value = 0;
    update(value.toString());
  }

  return (
    <div className="buttons-container">
      <button className="ui inverted red button" onClick={decrement}>
        DECREMENTAR
      </button>
      <button className="ui inverted grey button" onClick={reset}>
        RESETAR
      </button>
      <button className="ui inverted green button" onClick={increment}>
        INCREMENTAR
      </button>
    </div>
  );
}
