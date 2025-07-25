import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import MyNavbar from "./Components/MyNavbar";
import MyFooter from "./Components/MyFooter.jsx";
import Center from "./Components/Center.jsx";
import Top from "./Components/Top.jsx";
function App() {
  return (
    <>
      <MyNavbar />
      <Top />
      <Center />
      <MyFooter />
    </>
  );
}

export default App;
