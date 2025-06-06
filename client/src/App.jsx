import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from "react-hot-toast";

import LandingPage from './pages/Home/LandingPage'

//* Super Admin Routes
import ProtectedRoute from './pages/Client/ProtectedRoute'
import Layout from './pages/Client/Layout'
import Dashboard from './pages/Client/Dashboard'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />

        <Route path="/client/dashboard" element={<ProtectedRoute Component={Layout} />}   >
          <Route index element={<Dashboard />} />
        </Route>

      </Routes>
      <Toaster position='bottom-right' />
    </>
  )
}

export default App
