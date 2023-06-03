import React from "react";
import { Link } from 'react-router-dom';

function Sidebar() {
    return(
        <div className="sidebar">
            <div>
                <Link to="/">Home</Link> 
            </div>
            <div>
                <Link to="/profile">Profile</Link> 
            </div>
            <div>
                <Link to="/complaints">Complaints</Link> 
            </div>
            <div>Settings</div>
        </div>
    )
}

export default Sidebar;