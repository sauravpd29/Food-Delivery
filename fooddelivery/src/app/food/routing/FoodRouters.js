import React from "react";
import { Route, Routes } from "react-router-dom";
import DisplayFood from "../components/DisplayFood";
import DisplayFoodbyId from "../components/DisplayFoodbyId";
import EditForm from "../components/EditForm";
import FoodByType from "../components/FoodbyType";
import FoodForm from "../components/FoodForm";

export const FoodRouters = () => {
  console.log("inside the Food routers");

  return (
    <div>
      <Routes>
        <Route path="/add-food" element={<FoodForm></FoodForm>}></Route>
        <Route path="/edit-food" element={<EditForm></EditForm>}></Route>
        <Route path="/delete-food" element={<DisplayFoodbyId />}></Route>
        <Route
          path="/foodtype/:type"
          element={<FoodByType></FoodByType>}
        ></Route>
        <Route
          path="/DisplayFoods"
          element={<DisplayFood></DisplayFood>}
        ></Route>
        <Route
          path="/:id"
          element={<DisplayFoodbyId> </DisplayFoodbyId>}
        ></Route>
      </Routes>
    </div>
  );
};
