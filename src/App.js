import React, { useState } from "react";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ButtonPage /> */}
      {/* <AccordionPage /> */}
      <DropdownPage />
    </div >
  );
}

export default App;
