import React from 'react';
import {StarRating} from "./StarRating";

const Color = ({color, onRemove=f=>f, onRate=f=>f}) => {
  return(
    <div className="color">
      <h1>{color.title}</h1>
      <div className="color-background-container"
        style={{backgroundColor: color.color}}>
      </div>

      <div>
        <StarRating starsSelected={color.rating} onRate={onRate}/>
      </div>
      <div>
        <button onClick={onRemove}>REMOVE</button>
      </div>
    </div>
  )
};

export {Color};
