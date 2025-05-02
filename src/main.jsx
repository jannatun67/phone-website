import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from './MainLayout/MainLayout.jsx';
import HomePage from './Pages/HomePage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className='max-w-screen-xl mx-auto'>
    <Routes>
    <Route element={<MainLayout />}>
    <Route path="/" element={<HomePage />} />
  </Route>
    </Routes>
    </div>
  </BrowserRouter>
  </StrictMode>,
)
