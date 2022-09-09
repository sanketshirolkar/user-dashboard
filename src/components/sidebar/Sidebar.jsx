import React from "react";
import "./sidebar.css";
import { sidebarMenuItems } from "./sidebarMenu";
import dashboardLogo from "../../assets/logo/User-Dashboard.jpg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <div className="main_logo">
        <img
          src={dashboardLogo}
          alt="User Dashboard"
          height="60px"
          width="80px"
        />
      </div>
      <div className="sidebar_items">
        {sidebarMenuItems?.map((sidebarRoutes, index) => {
          return (
            <NavLink
              to={sidebarRoutes?.path}
              key={index}
              className="sidebar_links"
            >
              <div className="sidebarItems_menu">
                <div className="sidebar_logos">
                  <img src={sidebarRoutes?.logo} alt={""} width="50px" />
                </div>
                <div className="sidebarItems_name">{sidebarRoutes?.name}</div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
