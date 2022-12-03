import React from "react";
import "./form_box.css";

export const FormBox = (props) => {
    return (
        <div className="form-box">
            <div className="form-title">
                {props.formTitle}
            </div>
            <div className="form-content">
                {props.children}
            </div>
        </div>
    );
}