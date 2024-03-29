import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './normalize.css';
import App from './App';
import KeyCloakService from './services/KeyCloakService';
import HttpService from './services/HttpService';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () =>
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );

KeyCloakService.initKeycloak(renderApp);
HttpService.configure();

renderApp();
