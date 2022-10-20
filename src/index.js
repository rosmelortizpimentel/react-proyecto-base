import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MarvelApp } from './MarvelApp';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <MarvelApp />
  </BrowserRouter>,
  // </React.StrictMode>,
);
