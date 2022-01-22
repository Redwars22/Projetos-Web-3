import React from 'react';
import '../canvas-box/canvas-box.style.css';
import './effects-box.style.css';
import '../properties.style.css';

export default function EffectsBoxContainer() {
  function getBorderRadius() {
    let borderRadius = (
      document.getElementById('border-radius') as HTMLInputElement
    ).value;
    return borderRadius + 'px';
  }

  function getSepia() {
    let sepia = (document.getElementById('sepia') as HTMLInputElement).value;
    return sepia;
  }

  function getInvert() {
    let invert = (document.getElementById('invert') as HTMLInputElement).value;
    return invert;
  }

  function getOpacity() {
    let opacity = (document.getElementById('opacity') as HTMLInputElement)
      .value;
    return opacity;
  }

  function getGrayscale() {
    let grayscale = (document.getElementById('grayscale') as HTMLInputElement)
      .value;
    return grayscale;
  }

  function getBrightness() {
    let brightness = (document.getElementById('brightness') as HTMLInputElement)
      .value;
    return brightness;
  }

  function getContrast() {
    let contrast = (document.getElementById('contrast') as HTMLInputElement)
      .value;
    return contrast;
  }

  function getBlur() {
    let blur = (document.getElementById('blur') as HTMLInputElement).value;
    return blur;
  }

  function getSaturation() {
    let saturation = (document.getElementById('saturation') as HTMLInputElement)
      .value;
    return saturation;
  }

  function setEffects() {
    let effectArgument =
      'blur(' +
      getBlur() +
      'px) ' +
      'brightness(' +
      getBrightness() +
      '%) ' +
      'contrast(' +
      getContrast() +
      '%) ' +
      'grayscale(' +
      getGrayscale() +
      '%)' +
      'invert(' +
      getInvert() +
      '%) ' +
      'opacity(' +
      getOpacity() +
      '%) ' +
      'saturate(' +
      getSaturation() +
      '%) ' +
      'sepia(' +
      getSepia() +
      '%)';
    document.getElementById('image-area').style['filter'] = effectArgument;
    document.getElementById('image-area').style['border-radius'] =
      getBorderRadius();
  }

  return (
    <div className="form-layout">
      <div className="vertical-form-component">
        <div className="horizontal-form-component">
          <label htmlFor="saturation">Saturação</label>
          <input
            type="number"
            id="saturation"
            className="value-input"
            min="0"
            max="200"
            step="5"
            defaultValue="100"
          />
        </div>

        <div className="horizontal-form-component">
          <label htmlFor="blur">Blur</label>
          <input
            type="number"
            id="blur"
            className="value-input"
            min="0"
            max="20"
            step="2"
            defaultValue="0"
          />
        </div>

        <div className="horizontal-form-component">
          <label htmlFor="contrast">Contraste</label>
          <input
            type="number"
            id="contrast"
            className="value-input"
            min="0"
            max="200"
            step="5"
            defaultValue="100"
          />
        </div>

        <div className="horizontal-form-component">
          <label htmlFor="brightness">Brilho</label>
          <input
            type="number"
            id="brightness"
            className="value-input"
            min="0"
            max="200"
            step="5"
            defaultValue="100"
          />
        </div>

        <div className="horizontal-form-component">
          <label htmlFor="grayscale">Escala de Cinza</label>
          <input
            type="number"
            id="grayscale"
            className="value-input"
            min="0"
            max="100"
            step="5"
            defaultValue="0"
          />
        </div>

        <div className="horizontal-form-component">
          <label htmlFor="opacity">Opacidade</label>
          <input
            type="number"
            id="opacity"
            className="value-input"
            min="0"
            max="100"
            step="2"
            defaultValue="100"
          />
        </div>

        <div className="horizontal-form-component">
          <label htmlFor="invert">Inversão</label>
          <input
            type="number"
            id="invert"
            className="value-input"
            min="0"
            max="100"
            step="2"
            defaultValue="0"
          />
        </div>

        <div className="horizontal-form-component">
          <label htmlFor="sepia">Sépia</label>
          <input
            type="number"
            id="sepia"
            className="value-input"
            min="0"
            max="100"
            step="2"
            defaultValue="0"
          />
        </div>

        <div className="horizontal-form-component">
          <label htmlFor="border-radius">Raio da Borda</label>
          <input
            type="number"
            id="border-radius"
            className="value-input"
            min="0"
            max="100"
            step="5"
            defaultValue="0"
          />
        </div>

        <button
          className="waves-effect waves-light btn light-blue darken-3"
          onClick={setEffects}
        >
          APLICAR
        </button>
      </div>
    </div>
  );
}
