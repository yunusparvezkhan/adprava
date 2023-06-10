import React from "react";
import ButtonsPage from "./pages/ButtonsPage";
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
          <DropdownPage />
        </Route>

        <Route path='/Dropdown'>
          <DropdownPage />
        </Route>

        <Route path='/Accordion'>
          <AccordionPage />
        </Route>

        <Route path='/Buttons'>
          <ButtonsPage />
        </Route>

      </div>
    </div >
  );
}

export default App;
