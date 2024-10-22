import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import { Provider } from 'react-redux'
// import store from './redux/store.js'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* <Provider > */}
    <App />
    {/* </Provider> */}
    </BrowserRouter>
  </StrictMode>,
)
