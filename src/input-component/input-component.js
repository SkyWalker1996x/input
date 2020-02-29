import React from "react";

const InputComponent = ({onInputChange, inputValue}) => {

    return (
        <input type="text"
               onChange={onInputChange}
               value={inputValue}/>
    )
};

export default InputComponent;