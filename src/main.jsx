import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import "animate.css";
import Home from "./pages/Home.jsx";
import Developers from "./pages/Developers.jsx";
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/Login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}>
          {/* //here is my childs 👶 */}
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/developers" element={<Developers></Developers>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
