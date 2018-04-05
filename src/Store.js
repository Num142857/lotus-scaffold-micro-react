import { observable, action } from 'mobx';
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
let store = new Store();
export { store };