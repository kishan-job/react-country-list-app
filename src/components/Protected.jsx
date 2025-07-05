import React from "react";

import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

function Protected() {
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
}
export default Protected;
