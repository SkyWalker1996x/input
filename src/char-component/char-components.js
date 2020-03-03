import React from "react";
import './char-component.css'

const CharComponent = ({chars, onDeleteChar}) => {

    const elements = chars.map(({id, char}) => {
        return (
            <div
                className="char"
                key={id}
                onClick={() => onDeleteChar(chars, id)}>
                {char}
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