import { observable, action, computed, useStrict, autorun } from 'mobx';

class Store {
    @observable todos = [{
        title: "todo标题",
        done: true,
    }, {
        title: "已经完成 todo 的标题",
        done: true,
    }];

    @observable count = 0

    @action changeTodoTitle({ index, title }) {
        console.log("我在这里")
        this.todos[index].title = title
    }
    @action aaa() {
        alert()
    }

    @action countPlus() {
        this.count ++
        console.log(this.count)
    }
    @action countSubtraction() {
        this.count --
        console.log(this.count)
    }

    @computed get unfinishedTodos() {
        return this.todos.filter((todo) => todo.done)
    }
}
let store = new Store();
export { observable, action, computed, useStrict, autorun, store };