import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './component/LandingPage'
import AboutPage from './component/AboutPage'
import Navbar from './component/NavBar'
import Footer from './component/Footer'
import RegisterPage from './component/RegisterPage'

function App() {

  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/register' element={<RegisterPage/>} />

        </Routes>
      <Footer/>
      </Router>
    </>
  )
}

export default App
