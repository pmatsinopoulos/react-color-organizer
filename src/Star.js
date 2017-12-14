import React from 'react';
import {PropTypes} from 'prop-types';

const Star = ({selected = false, onClick = f => f}) => {
  return(
    <div className={`star ${selected ? 'selected' : ''}`} onClick={onClick}>
    </div>
  );
};

Star.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

export {Star};
