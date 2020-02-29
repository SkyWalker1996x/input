import React from "react";

const ValidationComponent = ({inputLength}) => {

  const shortText = 'Text too short';
  const longText = 'Text long enough';

  const label = inputLength > 5 ? longText : shortText;

  console.log(label);

  return (
      <p>{label}</p>
  )
};

export default ValidationComponent;