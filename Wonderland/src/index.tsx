import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import LowerBarComponent from './ui/header/lower-bar/lower-bar.component';
import UpperBarComponent from './ui/header/upper-bar/upper-bar.component';
import MainComponent from './ui/main/main.component';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div id="app-container">
        <UpperBarComponent />
        <LowerBarComponent />
        <MainComponent />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
