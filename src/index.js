import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// Dynamically set basename based on the hostname
// No basename needed for custom domain, but use /prize-website-v2 for github.io
const isGitHubPages = window.location.hostname.includes('github.io');
const basename = isGitHubPages ? '/prize-website-v2' : '/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();