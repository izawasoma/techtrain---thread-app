import React from "react";
import "./card.css";

export const Card = (props) => {
    let cardItem;
    if(props.url){
        cardItem = 
        <a href={ props.url }>
            <li className="card with-url">
                <div>{ props.title }</div>
            </li>
        </a>
    }
    else{
        cardItem = 
        <li className="card">
            <div>{props.title}</div>
        </li>
    }

    return (
        <>
            {cardItem}
        </>
    );
}