import React, { useState } from "react";
import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion";
import DropdownPage from "./pages/DropdownPage";


function App() {
  const [bodyclick, setBodyclick] = useState(false);

  return (
    <div className="App">
      <h1 className="text-5xl font-semibold text-gray-100 py-5 bg-gray-800 pl-20">Adprava</h1>
      {/* <ButtonPage /> */}
      {/* <Accordion qnadata={qnadata} /> */}
      <DropdownPage />
    </div >
  );
}

export default App;
