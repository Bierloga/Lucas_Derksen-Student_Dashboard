import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return ( 
        <div>
            <h1>Student Dashboard</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/reviews">Reviews</NavLink>
        </div>
     );
}
 
export default Header;