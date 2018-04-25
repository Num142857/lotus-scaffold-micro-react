import { createStore } from 'redux';

const initialState = {
    namespace:"base",
    count: 0,
    refresh:0
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'REFRESH':
        let refresh = state.refresh ++
            return Object.assign(state,{refresh});
        default:
            return state;
    }
}

export const storeInstance = createStore(reducer);