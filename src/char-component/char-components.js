import React from "react";
import PropTypes from 'prop-types';
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


CharComponent.propTypes = {
    onDeleteChar: PropTypes.func.isRequired,
    chars: PropTypes.arrayOf(
        PropTypes.shape({
                id: PropTypes.number.isRequired,
                char: PropTypes.string.isRequired
            }
        )
    )
};

export default CharComponent;