import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';  // Import de Provider de react-redux
import { BrowserRouter } from 'react-router-dom';  // Import de BrowserRouter
import store from './redux/Store/store'; // Assure-toi que ce chemin est correct vers ton store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Entoure App avec Provider */}
      <BrowserRouter>  {/* Envelopper avec BrowserRouter pour fournir le contexte de routage */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);




