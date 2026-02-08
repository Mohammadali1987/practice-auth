import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="w-xl mx-auto flex gap-3">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
};

export default Navbar;
