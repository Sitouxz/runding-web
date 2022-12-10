/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
// render App routes in strict mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// register service worker
serviceWorkerRegistration.register();
