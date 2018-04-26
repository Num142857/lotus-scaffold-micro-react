import {
  createStore
} from 'redux';

const initialState = {
  namespace: "base",
  count: 0,
  refresh: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
    var a = 0
    for (let index = 0; index < 999999999; index++) {
     a++
    }
    console.log(a)
      return {...state,count:state.count+1}
    case 'DECREMENT':
    return {...state,count:state.count-1}
    case 'REFRESH':
      return {...state,refresh:state.refresh+1}
    default:
      return state;
  }
}

export const storeInstance = createStore(reducer);
