import React from "react";

const Input = () => {

    const onInputChange = (e) => {
        console.log(e.target.value)
    };

    return (
        <input type="text" onChange={onInputChange}/>
    )
};

export default Input;