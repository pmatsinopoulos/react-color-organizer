import React from 'react';
import {Color} from './Color';

const ColorList = ({colors = [], onRemove = f => f}) => {
  return(
    <div className='color-list'>
      {
        colors.map((color, i) => <Color key={i} color={color} onRemove={() => onRemove(i)}/>)
      }
    </div>
  )
};

export {ColorList};
