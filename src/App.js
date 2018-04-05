import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observable, action } from 'mobx';
import {observer} from 'mobx-react';

class Store {
    @action.bound init (store){
      for (const key in store) {
        if (store.hasOwnProperty(key)) {
          const element = store[key];
          this[key] = element
        }
      }
  }
}

let store = new Store();

@observer
class App extends Component {
  constructor(props){
    super(props)
    
    store.init(this.props.store.store)
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={store.addition}>+</button> 
        {store.count}
        <button onClick={store.subtraction}>-</button>
      </div>
    );
  }
}

export default App;
