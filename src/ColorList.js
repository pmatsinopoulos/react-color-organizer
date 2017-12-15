import React from 'react';
import {Color} from './Color';

const ColorList = ({colors = [], onRemove = f => f, onRate = f => f}) => {
  return(
    <div className='color-list'>
      {
        colors.map((color, i) => <Color key={i} color={color} onRemove={() => onRemove(i)} onRate={(starsSelected) => onRate(i, starsSelected)}/>)
      }
    </div>
  )
};

export {ColorList};
