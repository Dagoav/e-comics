
import React from "react";
import { Link } from "react-router-dom";


function UserProfile() {
  return (
    <div>
      <h1>perfil de usuario</h1>
      <Link to = '/home' >
      <button>home</button>
      </Link>
    </div>
     
  );
}

export default UserProfile;


