import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import LeftBarComponent from './ui/layout/left-bar/left-bar.component';
import RightBarComponent from './ui/layout/right-bar/right-bar.component';

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
      <div className="column-layout">
        <LeftBarComponent />
        <RightBarComponent />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
