import React from "react";
import Button from "./lib/Button";
// Icons  ---->
import { CiBeaker1 } from "react-icons/ci";
import { GoBug, GoCheck } from "react-icons/go";

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl text-center">Adprava</h1>
      <div>

        <label>Normal</label>
        <Button> <CiBeaker1 /> Plain</Button>
        <Button primary >Primary</Button>
        <Button secondary > Secondary</Button>
        <Button success >Success</Button>
        <Button warning >Warning</Button>
        <Button danger >Danger</Button>

        <label>Rounded</label>
        <Button rounded >Plain</Button>
        <Button primary rounded >Primary</Button>
        <Button secondary rounded>Secondary</Button>
        <Button success rounded>Success</Button>
        <Button warning rounded>Warning</Button>
        <Button danger rounded>Danger</Button>

        <label>Outlined Rounded</label>
        <Button rounded >Plain</Button>
        <Button primary outlined rounded >Primary</Button>
        <Button secondary outlined rounded>Secondary</Button>
        <Button success outlined rounded>Success</Button>
        <Button warning outlined rounded>Warning</Button>
        <Button danger outlined rounded>Danger</Button>

        <label>Outlined</label>
        <Button outlined>Plain</Button>
        <Button primary outlined>Primary</Button>
        <Button secondary outlined>Secondary</Button>
        <Button success outlined>Success</Button>
        <Button warning outlined>Warning</Button>
        <Button danger outlined>Danger</Button>
      </div>
    </div >
  );
}

export default App;
