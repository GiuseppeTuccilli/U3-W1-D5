import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import MyNavbar from "./Components/MyNavbar";
import MyFooter from "./Components/MyFooter.jsx";
import Center from "./Components/Center.jsx";

function App() {
  return (
    <>
      <MyNavbar />
      <Center />
      <MyFooter />
    </>
  );
}

export default App;
