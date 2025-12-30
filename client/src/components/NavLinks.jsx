import React from "react";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
import { useDashboardContext } from "../pages/Dashboard";

const NavLinks = ({ isDesktopBar }) => {
  const {toggleSidebar} = useDashboardContext();  
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path /*, icon */ } = link;
        return (
          <NavLink to={path} key={text} className="nav-link" onClick={isDesktopBar ? null : toggleSidebar}>
            <span className="icon">{/*{icon}*/}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
