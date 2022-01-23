import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/reviews">
                <p className="want-review">Want to leave a review?</p>
                <h3 className="review-click">Click here!</h3>
                <p id="sidebar-sign">Reviews</p>
            </Link>
            
        </div>
    );
}

export default Sidebar;