import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {autorun} from 'mobx';
import {observer} from 'mobx-react';
import store from './Store';
autorun(autorun(function () {
  console.log("数据变动了");
}))


function testRun(){
  console.log("数据真的变动了")
}
@observer
class App extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
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
