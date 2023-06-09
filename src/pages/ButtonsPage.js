import React from "react";
import Button from "../components/Button";
// Icons  ---->
import { FaReact } from "react-icons/fa";

function ButtonsPage() {
    return (
        <div>
            <label>Normal</label>
            <Button> <FaReact /> Plain</Button>
            <Button primary > <FaReact /> Primary</Button>
            <Button secondary ><FaReact /> Secondary</Button>
            <Button success ><FaReact /> Success</Button>
            <Button warning ><FaReact /> Warning</Button>
            <Button danger ><FaReact /> Danger</Button>

            <label>Rounded</label>
            <Button rounded ><FaReact /> Plain</Button>
            <Button primary rounded ><FaReact /> Primary</Button>
            <Button secondary rounded><FaReact /> Secondary</Button>
            <Button success rounded><FaReact /> Success</Button>
            <Button warning rounded><FaReact /> Warning</Button>
            <Button danger rounded><FaReact /> Danger</Button>

            <label>Outlined Rounded</label>
            <Button rounded ><FaReact /> Plain</Button>
            <Button primary outlined rounded ><FaReact /> Primary</Button>
            <Button secondary outlined rounded><FaReact /> Secondary</Button>
            <Button success outlined rounded><FaReact /> Success</Button>
            <Button warning outlined rounded><FaReact /> Warning</Button>
            <Button danger outlined rounded><FaReact /> Danger</Button>

            <label>Outlined</label>
            <Button outlined><FaReact /> Plain</Button>
            <Button primary outlined><FaReact /> Primary</Button>
            <Button secondary outlined><FaReact /> Secondary</Button>
            <Button success outlined><FaReact /> Success</Button>
            <Button warning outlined><FaReact /> Warning</Button>
            <Button danger outlined><FaReact /> Danger</Button>
        </div>
    );
}

export default ButtonsPage;
