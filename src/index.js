import React from 'react';
import {createRoot} from 'react-dom/client';
import SetContextProvider from './context/SettingsContext';
import './index.css';
import App from './App';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(

  <SetContextProvider>
    <App />
  </SetContextProvider>
 
);

