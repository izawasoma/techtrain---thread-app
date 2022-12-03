import React from "react";
import "./card.css";

export const Card = (props) => {
    let cardItem;
    if(props.url){
        cardItem = 
        <a href={ props.url } key={ props.key }>
            <li className="card with-url">
                <div>{ props.title }</div>
            </li>
        </a>
    }
    else{
        cardItem = 
        <li className="card" key={ props.key }>
            <div>{props.title}</div>
        </li>
    }

    return (
        <>
            {cardItem}
        </>
    );
}