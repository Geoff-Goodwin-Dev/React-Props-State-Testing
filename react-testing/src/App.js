import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import Paragraph from "./components/Paragraph";

class App extends Component {
  constructor() {
    super();
    this.state = {
      test: "one"
    }
  }

  render() {
    return (
      <div className="App">
        <Header text={this.state.test}/>
        <Paragraph text={this.state.test}/>
      </div>
    );
  }
}

export default App;
