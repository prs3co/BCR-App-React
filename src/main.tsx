import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import AppBootstrap from './AppBootstrap';
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <AppBootstrap /> */}
    </BrowserRouter>
  </React.StrictMode>,
)
