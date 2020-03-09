import React from "react";
import PropTypes from 'prop-types';


const ValidationComponent = ({charsLength}) => {

    const short = 'Text too short';
    const long = 'Text long enough';

    const label = charsLength < 5 ? short : long;

    return (
      <p>{label}</p>
  )
};

ValidationComponent.propTypes = {
    charsLength: PropTypes.number.isRequired,
};

export default ValidationComponent;