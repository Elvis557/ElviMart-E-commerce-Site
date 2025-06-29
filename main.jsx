import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Polyfill for Buffer and util.inherits in the browser
import { Buffer } from 'buffer';
import { inherits } from 'util';

// Debugging: Check if Buffer and inherits are defined
console.log('Buffer:', Buffer);
console.log('inherits:', inherits);

// Make util.inherits globally available
window.inherits = inherits;

// Make Buffer globally available
window.Buffer = Buffer;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <App /> 
  </React.StrictMode>,
);