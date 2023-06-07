import React from "react";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import NavBar from "./components/NavBar";
import Route from "./components/Route";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>

        <Route path='/'>
          <AccordionPage />
        </Route>

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
