import React from "react";
import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion";

function App() {
  return (
    <div className="App">
      <h1 className="text-5xl font-semibold text-gray-100 py-5 bg-gray-800 pl-20">Adprava</h1>
      {/* <ButtonPage /> */}
      <Accordion />
    </div >
  );
}

export default App;
