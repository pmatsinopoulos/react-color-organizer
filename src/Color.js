import React from 'react';
import {StarRating} from "./StarRating";
import {PropTypes} from 'prop-types';

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

Color.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  rating: PropTypes.number
};

export {Color};
