import React from "react";
import "./input.css";

export const Input = (props) => {
    return (
        <input className="input" value={props.value} onChange={props.onChange} />
    );
}