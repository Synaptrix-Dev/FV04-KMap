import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from "react-hot-toast";

import Header from './components/Header';
import Footer from './components/Footer';
import ContactUsPage from './pages/Home/ContactUs/Container';
import HomeContainer from './pages/Home/HomeContainer';
import SubscriptionContainer from './pages/Home/SubscriptionPage/Container'
import LandsSearch from './pages/Home/LandsSearch/Container'
import ErrorPage from './pages/ErrorPage';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

//* Super Admin Routes
import ProtectedRoute from './pages/Client/ProtectedRoute'
import Layout from './pages/Client/Layout'
import Dashboard from './pages/Client/Dashboard'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomeContainer />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/pricing-plans' element={<SubscriptionContainer />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
        <Route path='/search-lands' element={<LandsSearch />} />

        <Route path="/client/dashboard" element={<ProtectedRoute Component={Layout} />}   >
          <Route index element={<Dashboard />} />
        </Route>

      </Routes>
      <Footer />
      <Toaster position='bottom-right' />
    </>
  )
}

export default App
