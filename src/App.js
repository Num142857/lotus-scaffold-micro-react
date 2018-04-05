import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observable, action } from 'mobx';
import {observer} from 'mobx-react';
import Rx from 'rxjs/Rx';



@observer
class App extends Component {
  constructor(props){
    super(props)
    setInterval(()=>{
      console.log('22222222',this.props.store)
    },1000)
  }
  render() {
    let {store} = this.props.store;
    console.log(store)
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
