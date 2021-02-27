import React from 'react';
import { Link } from "react-router-dom";

const NavBar = ({ user, handleLogout }) => {
    return (
    <>
      {user ?

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Panacea</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link"  href="/users">Users</a>
        <a class="nav-link" href="/blogs">Stories</a>
        <a class="nav-link" href="/addstory">Add Your Story</a>
        <a class="nav-link" onClick={handleLogout}>Logout</a>
       
      </div>
    </div>
  </div>
</nav>
      :
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">Panacea</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" href="/login">Login</a>
        <a class="nav-link" href="/signup">Sign Up</a>
        <a class="nav-link" href="/blogs">Stories</a>
       
      </div>
    </div>
          
          </div>
          </nav>
       
      }
    </>
  )
}

export default NavBar;
