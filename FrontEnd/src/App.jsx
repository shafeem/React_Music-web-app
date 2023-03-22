import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import User from './routes/User'
// import firebase from './firebase/firebase'


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<User/>}/>
      {/* <Route path="/admin" element= {<Admin/>}/> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
