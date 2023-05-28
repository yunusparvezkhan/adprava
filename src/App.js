import React from "react";
import Button from "./lib/Button";

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl text-center">Adprava</h1>
      <div>
        <Button primary>Primary</Button>
        <Button primary rounded >Primary rounded </Button>
        <Button secondary>Secondary</Button>
        <Button secondary rounded >Secondary rounded </Button>
        <Button success>Success</Button>
        <Button success rounded >Success rounded </Button>
        <Button warning>Warning</Button>
        <Button warning rounded >Warning rounded </Button>
        <Button danger>Danger</Button>
        <Button danger rounded >Danger rounded </Button>
        <Button danger rounded >Danger rounded </Button>
        <Button outlined >Outlined</Button>
        <Button outlined rounded >Outlined rounded </Button>
      </div>
    </div>
  );
}

export default App;
