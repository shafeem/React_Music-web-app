import React, { ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { Email, DashboardCustomize } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import ApartmentIcon from "@mui/icons-material/Apartment";

import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { useSelector } from "react-redux";

const NavItem = ({ to, Icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  console.log(isActive);

  return (
    <Tooltip
      title={label}
      TransitionComponent={Zoom}
      arrow
      placement="left-end"
    >
      <NavLink
        to={to}
        className={`${
          isActive ? "bg-gray-800 text-white " : "text-white/50 "
        }p-4 inline-flex justify-center rounded-md`}
      >
        {Icon}
      </NavLink>
    </Tooltip>
  );
};

const SideBar = () => {
  const { token } = useSelector((state) => state.userSlice);
  const isAuth  = useSelector((state) => state.userSlice.token)

  const Menus = [
    // { title: "Go to Home", icon: <MainSmallIcon className="w-10 h-auto hidden sm:flex"/>, link:"/"},
    { title: "Home", icon: <DashboardCustomize />, link: "/" },
    { title: "Artists", icon: <PersonIcon />, link: "/artists" },
    {
      title: "Add Songs",
      icon: <ControlPointOutlinedIcon />,
      link: "/addsongs",
    },
    {
      title: "Favorites ",
      icon: <FavoriteBorderOutlinedIcon />,
      link: "/favorites",
    },
    {
      title: "Downlords",
      icon: <DownloadForOfflineOutlinedIcon />,
      link: "/downloards",
    },
  ];

  const Login = [
    { title: "Settings", icon: <SettingsIcon />, link: "/settings" },
    { title: "LogIn", icon: <LoginOutlinedIcon />, link: "/login" },
  ];

  const Logout = [
    { title: "Settings", icon: <SettingsIcon />, link: "/settings" },
    { title: "Logout", icon: <LogoutIcon />, link: "/logout" },
  ];

  return (
    <>
      {/* Navigation */}
      <div className="bg-gray-900 px-2 lg:px-4 py-2 lg:py-10 sm:rounded-xl flex lg:flex-col justify-between ">
        <nav className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2 ">
          {Menus.map((item, index) => (
            <NavItem
              key={index}
              to={item.link}
              label={item.title}
              Icon={item.icon}
            />
          ))}
        </nav>
        <div className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
        {token ? 
           Logout.map((item, index) => (
            <NavItem
              key={index}
              to={item.link}
              Icon={item.icon}
              label={item.title}
            />
          ))
           :
          Login.map((item, index) => (
            <NavItem
              key={index}
              to={item.link}
              Icon={item.icon}
              label={item.title}
            />
          ))
          }
        </div>
      </div>
    </>
  );
};

export { SideBar };
