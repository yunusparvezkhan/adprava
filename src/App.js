import React, { useContext, useState } from "react";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import NavBar from "./components/NavBar";
import NavigationContext from "./context/navigation";
import Route from "./components/Route";

function App() {

  // This value is being accessed from context system solely for reloading the page on any changes. //
  const { currentPath } = useContext(NavigationContext);                                           //
  //----------------------------------------------------------------------------------------------//

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
        {/* {renderPage()} */}

        <Route path='/Accordion'>
          <AccordionPage />
        </Route>

        <Route path='/Button'>
          <ButtonPage />
        </Route>

        <Route path='/Dropdown'>
          <DropdownPage />
        </Route>

      </div>
    </div >
  );
}

export default App;
