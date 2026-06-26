import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App          from './App.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import CookiePolicy  from './pages/CookiePolicy.jsx'
import Terms         from './pages/Terms.jsx'
import CookieConsent from './components/CookieConsent.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"               element={<App />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy"  element={<CookiePolicy />} />
        <Route path="/terms"          element={<Terms />} />
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  </React.StrictMode>
)
