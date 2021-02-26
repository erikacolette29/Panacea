import React from 'react';
import { Link } from "react-router-dom";

const NavBar = ({ user, handleLogout }) => {
    return (
    <>
      {user ?
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li className="nav-link">Welcome, {user.name}</li>
              <li><Link to="/users" className="nav-link">Users</Link></li>
              <Link to='' className='nav-link' onClick={handleLogout}>Log Out</Link>
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/blogs" className="nav-link">Stories</Link></li>
              <li><Link to="/addstory" className="nav-link">Add Your Story</Link></li>
            </ul>
          </div>
        </nav>
      :
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li><Link to="/login" className="nav-link">Log In</Link></li>
              <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/blogs" className="nav-link">Stories</Link></li>
            </ul>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar;
