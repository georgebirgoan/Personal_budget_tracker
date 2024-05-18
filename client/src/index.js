import App from './App';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {store,persistor} from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react'
import React from 'react';
import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>

      <App />
    
      </PersistGate>
      </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
