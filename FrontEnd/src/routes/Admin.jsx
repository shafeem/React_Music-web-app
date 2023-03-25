import React from "react";
import { Route, Routes } from "react-router-dom";
import image from "../assets/Images/pexels-moose-photos-1037992.jpg";
import { SideBar } from '../components/LeftMenu/SideBar'
import AdminLogin from '../pages/admin/AdminLogin'


const Admin = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div
        className=" backdrop-brightness-110 hover:backdrop-brightness-150backdrop-blur-sm bg-cover bg-center flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10  sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl"
        style={{
          filter: "grayscale(20%)",
          backgroundImage: `url(${image})`,
        }}>

        <Routes>
            <Route path="/" element= {<AdminLogin/>}/>
        </Routes>

      </div>
    </div>
  );
};

export default Admin;
