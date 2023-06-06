import React, { useState } from "react";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import NavBar from "./components/NavBar";

function App() {

  const renderPage = () => {
    if (window.location.pathname === '/Button') {
      return <div><ButtonPage /></div>
    } else if (window.location.pathname === '/Accordion' || window.location.pathname === '/') {
      return <AccordionPage />
    } else if (window.location.pathname === '/Dropdown') {
      return <DropdownPage />
    }
  }

  return (
    <div className="App">
      <NavBar />
      <div>
        {renderPage()}
      </div>
    </div >
  );
}

export default App;
