import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Fruits from "./components/Fruits/Fruits";
import Snacks from "./components/Snacks/Snacks";
import Meat from "./components/Meat/Meat";
function Router() {
  return (
    <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/fruits" Component={Fruits}></Route>
      <Route path="/snacks" Component={Snacks}></Route>
      <Route path="/meat" Component={Meat}></Route>
    </Routes>
  );
}

export default Router;
