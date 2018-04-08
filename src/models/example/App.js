import React, { Component } from 'react';
import logo from '../../asserts/logo.svg';
import './App.css';
import { observable, action, autorun } from 'mobx';
import {observer} from 'mobx-react';

@observer
class App extends Component {
  constructor(props){
    super(props)
    console.log(this.props.store)
    this.store  = observable(this.props.store)
    console.log(this.props.store === this.store )

  }
  render() {
    let store = this.store.store
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={()=>{
          // this.setState({view:!this.state.view})
          store.addition()
        }}>+</button> 
        {store.count}
        <button onClick={()=>{
          console.log(this.props.store === this.store, this.props.store , this.store)
          // this.setState({ view: !this.state.view })
          store.subtraction()
        }}>-</button>
      </div>
    );
  }
}

export default App;
