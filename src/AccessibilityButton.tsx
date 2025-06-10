import "./index.css"
import React from 'react'

export default function AccessibilityButton(props){
    return (
        <div className="A-ButtonContainer">
            <button 
            className="A-Button"
            onClick={props.onClick}>
                <span className="A-icon-span">
                    {props.icon}
                </span>
                {props.buttonText}
            </button>
        </div>
    )

}