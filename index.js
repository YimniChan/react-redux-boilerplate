/* global window, document */
/* eslint no-render-return-value: 0, jsx-filename-extension: 0 */

// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/Counter';
import CounterApp from './components/CounterApp' 
import counter from './reducers';
import { INCREMENT, DECREMENT, CLEAR } from './actions';
//import { INCREMENT, INCREMENT5, DECREMENT, CLEAR } from './actions';
import {Provider} from 'react-redux';
import reducer from './reducers/index';

// /* eslint-disable no-underscore-dangle */
// const store = createStore(counter,
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&
//   window.__REDUX_DEVTOOLS_EXTENSION__());
// /* eslint-enable */

/* eslint-disable no-underscore-dangle */
const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

const render = () => ReactDOM.render(
  <Provider store={store}><CounterApp/></Provider>,
  // <Counter
  //   value={store.getState()}
  //   onIncrement={() => store.dispatch({ type: INCREMENT })}
  //   onIncrement5={() => store.dispatch({ type: INCREMENT5 })}
  //   onDecrement={() => store.dispatch({ type: DECREMENT })}
  //   onClear={() => store.dispatch({ type: CLEAR })}
  // />,
  document.getElementById('root')
);


render();
store.subscribe(render);
