import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Only call ReactDOM.createRoot() once here
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />  {/* App is rendered here */}
  </StrictMode>,
);
