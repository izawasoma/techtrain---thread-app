import React from "react";
import "./card_wrap.css"

export const CardWrap = (props) => {
    return (
        <ul className="card-wrap">
            {props.children}
        </ul>
    );
}