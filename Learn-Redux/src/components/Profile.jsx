import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store";

export default function Profile() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(authActions.logout());
    };
    return (
        <div>
            Profile
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
