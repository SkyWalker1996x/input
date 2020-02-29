import React from "react";

const Input = ({onInputChange}) => {

    return (
        <input type="text" onChange={onInputChange}/>
    )
};

export default Input;