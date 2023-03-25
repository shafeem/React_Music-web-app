import React from "react";
import Login from "../../components/Login/AdminLogin";

const AdminLogin = () => {
  return (
    <>
      <div className="flex-1 px-2 sm:px-0 min-h-screen">
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-extralight text-white/50">Login</h3>

       
        </div>

        <div className="mt-10">{<Login />}</div>
      </div>
    </>
  );
};

export default AdminLogin;
