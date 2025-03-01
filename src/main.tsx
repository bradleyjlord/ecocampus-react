import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from '@/components/Home'
import Navbar from './components/navbar'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <Home/>
    </div>
    
  </StrictMode>,
)
