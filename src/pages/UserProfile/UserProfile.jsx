
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/navBar/Navbar";
import Favorites from "../favorites/Favorites";


function UserProfile() {
  return (
    <div>

      <NavBar/>

      <Favorites/>
    </div>
     
  );
}

export default UserProfile;


