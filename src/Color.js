import React from 'react';
import {StarRating} from "./StarRating";
import {PropTypes} from 'prop-types';

const Color = ({title, color, rating, onRemove=f=>f, onRate=f=>f}) => {
  return(
    <div className="color">
      <h1>{title}</h1>
      <div className="color-background-container"
        style={{backgroundColor: color}}>
      </div>

      <div>
        <StarRating starsSelected={rating} onRate={onRate}/>
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
