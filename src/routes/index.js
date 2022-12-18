import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";

export default function RoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
      </Routes>
    </BrowserRouter>
  );
}
