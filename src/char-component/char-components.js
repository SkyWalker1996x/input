import React from "react";
import './char-component.css'

const CharComponent = ({chars, onDeleteChar}) => {

    const elements = chars.map((item) => {
        const {id, label} = item;
        return (
            <div
                className="char"
                key={id}
                onClick={() => onDeleteChar(chars, id)}>
                {label}
            </div>
        )
    });

    return (
        <div className='char-wrapper'>
            {elements}
        </div>
    )
};

export default CharComponent;