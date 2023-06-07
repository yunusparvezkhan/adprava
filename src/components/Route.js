import useNavigation from "../hooks/navigationHook";

const Route = ({ children, path }) => {
    const { currentPath } = useNavigation();

    if (currentPath === path) {
        return children;
    } else {
        return null;
    }
}

export default Route;