// import React from 'react';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';

const root = ReactDOM.createRoot(document.getElementById('root'));

const preloadedState = {
  allIngredients: [],
  currentIngredients: [],
  viewIngredient: {},
  order: {}
};

const reducer = (state, action) => {

}

const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState
});

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);