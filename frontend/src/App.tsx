import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import BulkRides from './pages/bulkRides'
function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/allRides' element = {<BulkRides/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
