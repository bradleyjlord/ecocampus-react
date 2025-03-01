import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from '@/components/Home'
import Navbar from './components/Navbar'
import Installation from './components/Installation'
import Faqs from './components/Faqs'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar/>
      <Home/>
      <Installation />
      <Faqs />
    </div>
  </StrictMode>,
)
