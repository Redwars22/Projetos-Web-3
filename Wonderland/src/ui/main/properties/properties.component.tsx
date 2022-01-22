import React from 'react';
import CanvasBoxContainer from './canvas-box/canvas-box.component';
import CSSEditorComponent from './css-editor/css-editor.component';
import EffectsBoxContainer from './effects-box/effects-box.component';
import './properties.style.css';

export default function PropertiesComponent() {
  return (
    <div className="properties-container">
      <h1 className="section-title">Canvas</h1>
      <CanvasBoxContainer />
      <h1 className="section-title">Efeitos</h1>
      <EffectsBoxContainer />
      <h1 className="section-title">CSS customizado</h1>
      <CSSEditorComponent />
    </div>
  );
}
