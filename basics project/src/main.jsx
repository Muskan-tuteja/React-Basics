import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Header, { App1, App3, Appp }  from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Appp/>
    <App1/>
    <App3/>
    
    
  </StrictMode>,
)
