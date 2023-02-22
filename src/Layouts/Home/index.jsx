import React from "react";
import notificationIcon from "../../Assets/Icons/notification.svg";
import messageIcon from "../../Assets/Icons/message.svg";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <div className="home-header-container">
        <div>Logo</div>
        <div className="header-menu-container">
          <img src={notificationIcon} alt="bell" />
          <img src={messageIcon} alt="msg" />
          <div className="menu-items">Logout</div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default HomeLayout;
