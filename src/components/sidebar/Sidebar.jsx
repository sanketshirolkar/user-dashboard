import React from "react";
import "./sidebar.css";
import { sidebarMenuItems } from "./sidebarMenu";
import dashboardLogo from "../../assets/logo/User-Dashboard.jpg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllUsersList } from "../../redux/selectors/users.selector";

const Sidebar = () => {
  const allUsersList = useSelector(getAllUsersList);
  const extractedUserData = Object.values(allUsersList);

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
              activeclassName="active"
            >
              <div className="sidebarItems_menu">
                <div className="sidebar_logos">
                  <img
                    src={sidebarRoutes?.logo}
                    alt={""}
                    width="70px"
                    height="50px"
                  />
                </div>
                {sidebarRoutes?.name === "Total Users" ? (
                  <div className="badge_container">
                    <div className="sidebarItems_name">
                      {sidebarRoutes?.name}
                    </div>
                    <span>
                      {" "}
                      {extractedUserData[1] ? extractedUserData[1] : 0}
                    </span>
                  </div>
                ) : (
                  <div className="sidebarItems_name">{sidebarRoutes?.name}</div>
                )}
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
