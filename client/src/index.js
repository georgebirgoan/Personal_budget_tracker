import App from './App';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Don't forget to import the CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <ToastContainer />
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

