import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";

const DashboardRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
};

export default DashboardRouter;
