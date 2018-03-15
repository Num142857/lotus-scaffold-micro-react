import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {observable, action, computed, useStrict} from 'mobx';
import {observer} from 'mobx-react';

class Store {
  @observable todos = [{
    title: "todo标题",
    done: true,
  },{
    title: "已经完成 todo 的标题",
    done: true,
  }];

  bbb=0
  ccc=false

  @action changeTodoTitle({index,title}){
    this.todos[index].title = title
  }
  @action aaa(){
    alert()
  }

  @computed get unfinishedTodos () {
    return  this.todos.filter((todo) => todo.done)
  }
}



@observer
class TodoBox extends Component  {

  render() {
    console.log('render');
    return (
      <div>
        <Test store={this.props.store}/>
        <ul>
          { /* 把 unfinishedTodos 换成 todos，点击修改标题就会在控制台打印 "render".*/ }
          {this.props.store.unfinishedTodos.map(
            (todo,index) => <li key={index}>{todo.title}</li>
          )}
        </ul>
        <div>
          <input type="button" onClick={() => {
            this.props.store.changeTodoTitle({index:0,title:"修改后111111111111111的todo标题"});
          }} value="修改标题"/>
          <input type="button" onClick={() => {
            this.props.store.aaa();
          }} value="修改标题"/>
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

const store = new Store();


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TodoBox store={store} />
      </div>
    );
  }
}

export default App;
