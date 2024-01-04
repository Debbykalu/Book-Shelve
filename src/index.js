import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BookProvider } from './Component/BookContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BookProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </BookProvider>
);


