import { observable, useStrict, action, runInAction } from 'mobx'
useStrict(true)

class Store {

    @observable initData = {}

    @action.bound handle = ()=>{ }

    @action.bound asyncHandle = async()=>{ }

  }
  
  export default new Store()
  