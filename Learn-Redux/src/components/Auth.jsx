import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";

export default function Auth() {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authActions.login());
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">email:</label>
            <input type="email" name="email" id="email" required />
            <label htmlFor="password">password:</label>
            <input
                type="password"
                name="password"
                id="password"
                required
                minLength={6}
            />
            <button type="submit">Login</button>
        </form>
    );
}
