import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// Dynamically set basename for GitHub Pages vs. local development
const basename =
  process.env.NODE_ENV === 'production'
    ? '/'
    : '/'; // In dev, use "/", so links work at http://localhost:3000

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();