import React from 'react'
import { useSelector } from 'react-redux'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import User from './routes/User'
import Admin from './routes/Admin'
// import firebase from './firebase/firebase'


function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<User/>}/>
      <Route path="/admin/*" element= {<Admin/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
