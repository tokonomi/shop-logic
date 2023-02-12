import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CardStore } from './context/CardContext';
import "./styles/main.scss"

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from './redux/reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));
const myStore = createStore(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
root.render(
  <Provider store={myStore}>
    <CardStore>
      <App />
    </CardStore>
  </Provider>
);