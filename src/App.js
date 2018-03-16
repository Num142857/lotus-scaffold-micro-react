import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {observable, action, computed, useStrict} from 'mobx';
import { observer, inject} from 'mobx-react';
// import store from './Store';



@inject("store") @observer
class TodoBox extends Component  {
  render() {
    console.log('render');
    console.log(this.props.store.store.default)
    return (
      <div>
        <Test store={this.props.store}/>
        <div>
          <input type="button" onClick={() => {
            this.props.store.changeTodoTitle({index:0,title:"修改后111111111111111的todo标题"});
          }} value="修改标题"/>
          <input type="button" onClick={() => {
            this.props.store.aaa();
          }} value="修改标题"/>
        </div>

        <div>
          <input type="button" onClick={() => {
            this.props.store.store.default.countPlus();
          }} value="+" />
          {this.props.store.store.default.count}
          <input type="button" onClick={() => {
            this.props.store.store.default.countSubtraction();
          }} value="-" />

        </div>
      </div>
    )
  }
}

var i=0;
class Test extends Component  {

  render() {
    console.log('render');
    console.log(this.props.store);
   
    return (
      <div>
        <span onClick={()=>{
          this.props.store.bbb++;
          this.props.store.ccc=!this.props.store.ccc
          this.props.store.changeTodoTitle({index:0,title:this.props.store.bbb})
        }}>21212121211</span>
      </div>
    )
  }
}


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
        <TodoBox />
      </div>
    );
  }
}

export default App;
