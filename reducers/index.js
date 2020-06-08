// reducers/index.js
import { INCREMENT, INCREMENTByFIVE, DECREMENT, CLEAR } from '../actions';
//import { INCREMENT, DECREMENT, CLEAR } from '../actions';
import {combineReducers} from 'redux';

const initialState = 0;
export default (state = initialState, action) => {
//const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    // case INCREMENT:
    //   console.log(action.value);
    //   return state + action.value;
    case INCREMENTByFIVE:
    return state + 5;
    case DECREMENT:
      return state - 1;
    case CLEAR:
      return (state = 0);  
    default:
      return state;
  }
};

//export default combineReducers({value: reducer});