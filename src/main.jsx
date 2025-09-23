import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './AppSpeaker'
import { HashRouter } from 'react-router-dom'
import './scss/all.scss'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
