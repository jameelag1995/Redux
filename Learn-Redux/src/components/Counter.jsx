import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";
import styled from "styled-components";
const CounterContainer = styled.div`
    background-color: #fff;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 32px;
`;
export default function Counter() {
    const dispatch = useDispatch();

    const counter = useSelector((state) => state.counter.counter);
    const show = useSelector((state) => state.counter.showCounter);

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };

    const increaseHandler = () => {
        dispatch(counterActions.increaseBy(5));
    };
    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    return (
        <CounterContainer>
            <h1 style={{ color: "#333" }}>Redux Counter</h1>
            {show && (
                <div>
                    <h3 style={{ color: "#333" }}>Count: {counter}</h3>
                </div>
            )}
            <div>
                <button onClick={decrementHandler}>Decrement - </button>
                <button onClick={incrementHandler}>Increment + </button>
                <button onClick={increaseHandler}>Increase by 5 </button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter </button>
        </CounterContainer>
    );
}
