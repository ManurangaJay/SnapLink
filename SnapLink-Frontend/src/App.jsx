import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './component/LandingPage'
import AboutPage from './component/AboutPage'
import Navbar from './component/NavBar'
import Footer from './component/Footer'
import RegisterPage from './component/RegisterPage'
import { Toaster } from 'react-hot-toast'
import Login from './component/LoginPage'
import DashboardLayout from './dashboard/DashboardLayout'
import LoginPage from './component/LoginPage'

function App() {

  return (
    <>
      <Router>
      <Navbar/>
      <Toaster position='bottom-center'/>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/dashboard' element={<DashboardLayout/>} />

        </Routes>
      <Footer/>
      </Router>
    </>
  )
}

export default App
