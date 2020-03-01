import React from "react";
import './Chars.styled.css'

const Chars = ({chars, onDeleteChar}) => {

    const elements = chars.map(({id, label}) =>
        <div
            className="char"
            key={id}
            onClick={() => onDeleteChar(id)}>
            {label}
        </div>
    );

    return (
        <div className='char-wrapper'>
            {elements}
        </div>
    )
};

export default Chars;