import React from "react";
import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";

function App() {
  const qnadata = [
    {
      id: '1',
      q: "Who invented Gravity?",
      a: "Ancient Indian Rishi, Brahmagupta II invented gravity."
    },
    {
      id: '2',
      q: "Who invented Surgery?",
      a: "Ancient Indian Medical practisioner Sushruta Samhita came up with the theory of surgery."
    },
    {
      id: '3',
      q: "Who invented Electromagnetic Waves?",
      a: "Profound British Indian Bengali Scientist Acharya jagadish Chandra Bose invented Electromagnetic Waves."
    },
    {
      id: '4',
      q: "Who discovered the value of pi?",
      a: "Rishi Aryabhatta calculated the value of pi to be 62832/20000 = 3.1416"
    },
    {
      id: '5',
      q: "Who discovered the shape of the earth?",
      a: "Aryabhatta was among the first people who gave the oval shape theory of earth."
    },

  ]
  return (
    <div className="App">
      <h1 className="text-5xl font-semibold text-gray-100 py-5 bg-gray-800 pl-20">Adprava</h1>
      {/* <ButtonPage /> */}
      {/* <Accordion qnadata={qnadata} /> */}
      <Dropdown />
    </div >
  );
}

export default App;
