import React from 'react';
import ReactDOM from 'react-dom/client';
import { SkeletonTheme } from 'react-loading-skeleton';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'react-loading-skeleton/dist/skeleton.css'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SkeletonTheme baseColor="#6A6565" highlightColor="#444">
        <App />
      </SkeletonTheme>
    </BrowserRouter>
  </React.StrictMode>
);
