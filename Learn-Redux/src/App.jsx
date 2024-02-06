import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";
import Profile from "./components/Profile";
import Auth from "./components/auth";

function App() {
    const [count, setCount] = useState(0);
    const isAuth = useSelector((state) => state.auth.isAuthenticated);
    return (
        <>
            {isAuth ? <Profile /> : <Auth />}
            <Counter />
        </>
    );
}

export default App;
