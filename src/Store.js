import { observable, action, computed } from 'mobx';
class Store {
    @observable  count = 0

    @action.bound alert() {
        alert()
    }

    @action.bound addition (){
        this.count ++
    }

    @action.bound subtraction (){
        this.count --
    }
}

export default new Store();