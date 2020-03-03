import React from "react";

const ValidationComponent = ({charsLength}) => {

    const short = 'Text too short';
    const long = 'Text long enough';

    const label = charsLength < 5 ? short : long;

    return (
      <p>{label}</p>
  )
};

export default ValidationComponent;