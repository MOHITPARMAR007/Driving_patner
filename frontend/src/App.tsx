import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import BulkRides from './pages/bulkRides'
import Register from './components/Register'
import SignIn from './components/SignIn'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
        <Navbar/>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/allRides' element = {<BulkRides/>}/>
              <Route path='/Register' element = {<Register/>}/>
              <Route path='/SignIn' element = {<SignIn/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
