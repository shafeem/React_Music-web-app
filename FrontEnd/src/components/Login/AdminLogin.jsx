import React, { useState } from "react";
import axios from "../../axios/adminInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../ToolKit/slice/AdminSlice";

const AdminLogin = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailSetter = (e) => {
    setEmail(e.target.value);
    console.log(Email, "this is the email");
  };
  const passwordSetter = (e) => {
    setPassword(e.target.value);
    console.log(password, "this is the password");
  };

  const verifyChecker = async (e) => {
    e.preventDefault();

    await axios
      .post(`/adminVerify?Email=${Email}&password=${password}`)
      .then((response) => {
        const data = response.data.message;

        if (data == "Email Error" || data == "Password Error") {
          toast.error(data, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.success(data, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        navigate("/dashbord");
        dispatch(
          setLogin({
            token: response.data.token,
          })
        );
      });
  };

  return (
    <div className="flex flex-col relative justify-center min-h-screen overflow-hidden">
      <div className="pb-96 mb-8 w-72 m-auto rounded-lg lg:max-w-xl">
        <form className="" onSubmit={verifyChecker}>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              type="text"
              onChange={emailSetter}
              placeholder="Enter Your Email"
              className="block w-full px-4 py-2 mt-2 text-gray-800 bg-slate-200 rounded-md focus:border-gray-800 focus:outline-none focus:ring focus:ring-opacity-100"
            />
          </div>
          <div className="mt-3">
            <label className="block text-sm font-semibold text-gray-800">
              PassWord
            </label>
            <input
              onChange={passwordSetter}
              type="password"
              placeholder="xxxxx"
              className="block w-full px-4 py-2 mt-2 text-gray-800 bg-slate-200 rounded-md focus:border-gray-800 focus:outline-none focus:ring focus:ring-opacity-100"
            />
          </div>
          <div className="mt-6">
            <button className="items-center justify-center w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md bg-gray-800  focus:outline-none focus:bg-gray-800">
              Submit
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
