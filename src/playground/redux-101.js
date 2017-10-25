import { createStore } from 'redux'

//Action generators - funtions that return action Objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({set = 55 } = {}) => ({
  type: 'SET',
  set
})
const resetCount = ({reset = 0} = {}) => ({
  type: 'RESET',
  reset
})
const store = createStore((state = { count: 0}, action) => {  // This is default value of state
  switch (action.type){
    case 'INCREMENT':
      return {
      count: state.count + action.incrementBy
    };
    case 'DECREMENT':
      return {
      count: state.count - action.decrementBy
    };
    case 'SET':
    return {
      count: state.count = action.set
    }
    case 'RESET':
      return {
      count: state.count = action.reset
    };
    default: 
      return state;
  }
});

const unsubscribe = store.subscribe(() => {           // We pass a single function to it and this function gets called 
  console.log(store.getState());  //everysingle time the store changes
});
//Actions - that's an object that get sent to the store

//increment, decrement, reset - these are option we want to have
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5 // - we want to send it to the store
// });

store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(decrementCount());

store.dispatch(setCount());