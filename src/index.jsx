// import React from 'react';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import { rootReducer } from './services/reducers';
import { allIngredients } from './services/reducers/all-ingredients';

const root = ReactDOM.createRoot(document.getElementById('root'));

const preloadState = {
  allIngredients: [],
  constructorIngredients: [],
  currentIngredient: {},
  order: {}
}

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  preloadState
});

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);