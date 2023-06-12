import React from "react";
import Route from "./components/Route";
import ButtonsPage from "./pages/ButtonsPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import NavBar from "./components/NavBar";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";

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

        <Route path='/Modal'>
          <ModalPage />
        </Route>

        <Route path='/Table'>
          <TablePage />
        </Route>

      </div>
    </div >
  );
}

export default App;
