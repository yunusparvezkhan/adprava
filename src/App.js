import React from "react";
import Button from "./lib/Button";

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl text-center">Adprava</h1>
      <div>
        <Button primary outlined>Primary</Button>
        <Button primary rounded outlined>Primary rounded </Button>
        <Button secondary outlined>Secondary</Button>
        <Button secondary rounded outlined>Secondary rounded </Button>
        <Button success outlined>Success</Button>
        <Button success rounded outlined>Success rounded </Button>
        <Button warning outlined>Warning</Button>
        <Button warning rounded outlined>Warning rounded </Button>
        <Button danger outlined>Danger</Button>
        <Button danger rounded outlined>Danger rounded </Button>
      </div>
    </div>
  );
}

export default App;
