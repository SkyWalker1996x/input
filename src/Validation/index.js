import React from "react";

const Validation = ({inputLength}) => {
    const shortText = 'Text too short';
    const longText = 'Text long enough';

    return (
        <p>{inputLength > 5 ? longText : shortText}</p>
    )
};

export default Validation;