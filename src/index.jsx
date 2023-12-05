import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

export const Context = createContext(null);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
