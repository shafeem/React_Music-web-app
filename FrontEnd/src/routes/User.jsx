import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SideBar } from '../components/LeftMenu/SideBar'
import Home from '../pages/home'

const User = () => {
  return (
    <>
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="bg-gray-800 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10  sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
        <SideBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default User
