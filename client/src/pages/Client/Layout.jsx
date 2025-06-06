import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate, NavLink } from "react-router-dom";
import LOGO_LIGHT from "../../assets/logo.png";

function Layout() {

  return (
    <div className="min-h-screen bg-gray-100 text-black p-4 overflow-x-hidden max-w-full">
      <Outlet />
    </div>
  );
}

export default Layout;