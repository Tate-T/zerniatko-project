import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import CategoriePage from "./pages/СategoriesPage/CategoriesPage"
function App() {
  return (
    <>
      <MainPage />
      <CategoriePage/>
    </>
  );
}

export default App;
