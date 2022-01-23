import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import FooterComponent from './ui/footer/footer.component';
import HeaderComponent from './ui/header/header.component';
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
      <div className="app-container">
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
