import React, { useEffect } from "react";
import { setLogout } from "../../ToolKit/slice/UserSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function LogOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(
      setLogout({
        token: null,
        number: null,
        email: null,
      })
    );

    console.log("this is working?");
    navigate("/");
  };

  useEffect(() => {
    logout();
  }, []);

  return <div>defadfasdfaasdfasdfasdfsdfsdfasdf</div>;
}

export default LogOut;
