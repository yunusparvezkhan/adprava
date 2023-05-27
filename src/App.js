import React from "react";
import Button from "./lib/Button";

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl text-center">Adprava</h1>
      <div>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button success>Success</Button>
        <Button warning>Warning</Button>
        <Button danger>Danger</Button>
      </div>
    </div>
  );
}

export default App;
