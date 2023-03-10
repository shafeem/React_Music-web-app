import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import User from './routes/User'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<User/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
