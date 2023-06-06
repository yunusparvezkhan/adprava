import { useContext } from "react";
import NavigationContext from "../context/navigation";

const Route = ({ children, path }) => {
    const { currentPath } = useContext(NavigationContext);

    if (currentPath === path) {
        return children;
    } else {
        return null;
    }
}

export default Route;