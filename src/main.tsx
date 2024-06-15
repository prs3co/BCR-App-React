import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import AppBootstrap from './AppBootstrap';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* <AppBootstrap /> */}
  </React.StrictMode>,
)
