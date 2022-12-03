import React from "react";
import "./loading.css"

export const Loading = (props) => {
    return (
        <>
            {  props.isLoading ? (
            <div className="loading">
                <div className="sp sp-hydrogen"></div>
                <p className='loading_text'>Loading...</p>
            </div>) : ""}
        </>
    );
}