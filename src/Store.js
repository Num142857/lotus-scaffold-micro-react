class Store {
    @observable todos = [{
        title: "todo标题",
        done: true,
    }, {
        title: "已经完成 todo 的标题",
        done: true,
    }];

    bbb = 0
    ccc = false

    @action changeTodoTitle({ index, title }) {
        this.todos[index].title = title
    }
    @action aaa() {
        alert()
    }

    @computed get unfinishedTodos() {
        return this.todos.filter((todo) => todo.done)
    }
}

export default new Store();