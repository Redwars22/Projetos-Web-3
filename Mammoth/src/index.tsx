import React, { Component } from 'react';
import { render } from 'react-dom';
import CodePreviewComponent from './components/app/CodePreview';
import FooterComponent from './components/app/Footer';
import HeaderComponent from './components/app/Header';
import FormComponent from './components/form/Form.component';
import './style.css';

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
      <div>
        <HeaderComponent />
        <CodePreviewComponent />
        <FormComponent />
        <FooterComponent />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
