import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return ( 
        <div className="header-container">
            <h1>Winc Student Dashboard</h1>
            <div><NavLink to="/">Home</NavLink></div>
            <div><NavLink to="/reviews">Reviews</NavLink></div>
        </div>
     );
}
 
export default Header;