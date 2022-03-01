import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../../core/components/layouts/Landing";
import Dashboard from "../../dashboard/components/Dashboard";
import Login from "../components/Login";
import Register from "../components/Register";
export const AuthRouters = () => {
  console.log("inside the auth routers");
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/delete" element={<Landing></Landing>}></Route>
      </Routes>
    </div>
  );
};
