// reducers/index.js
import { INCREMENT, INCREMENT5, DECREMENT, CLEAR } from '../actions';

const initialState = 0;
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case INCREMENT5:
    return state + 5;
    case DECREMENT:
      return state - 1;
    case CLEAR:
      return (state = 0);
        
    default:
      return state;
  }
};
