import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'remixicon/fonts/remixicon.css'
import "./assets/styles/style.scss";
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal'
import 'react-phone-number-input/style.css';

import {Provider} from 'react-redux'
import {applyMiddleware, legacy_createStore as createStore} from 'redux'
import thunk from "redux-thunk";
import reducer from './store/reducers'

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer, applyMiddleware(thunk));
Modal.setAppElement(document.getElementsByTagName('body'));

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
