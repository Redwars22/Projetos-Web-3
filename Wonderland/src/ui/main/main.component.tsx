import React from 'react';
import ImageComponent from './image/image.component';
import './main.style.css';
import PropertiesComponent from './properties/properties.component';
import ToolbarComponent from './toolbar/toolbar.component';

export default function MainComponent() {
  return (
    <div className="main-grid">
      <ToolbarComponent />
      <ImageComponent />
      <PropertiesComponent />
    </div>
  );
}
