import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observable, action, autorun } from 'mobx';
import {observer} from 'mobx-react';

@observer
class App extends Component {
  constructor(props){
    super(props)
    this.store  = observable(this.props.store)
  }
  render() {
    let store = this.store
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={store.addition.bind(store)}>+</button> 
        {store.count}
        <button onClick={store.subtraction.bind(store)}>-</button>
      </div>
    );
  }
}

export default App;
