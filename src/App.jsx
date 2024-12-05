import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Adobe from './pages/Adobe'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/adobe' element={<Adobe />} />
      </Routes>
    </>
  )
}

export default App
