import React from 'react';
import {Star} from './Star';

const StarRating = ({starsSelected=0, totalStars=5, onRate=f=>f}) => {
  return(
    <div className="starRating">
      {
        Array(totalStars).fill().map( (_, i) => <Star key={i} selected={starsSelected > i} onClick={() => onRate(i + 1)}/>)
      }
      <button onClick={() => onRate(0)}>clear</button>
      <p>{starsSelected} of {totalStars} stars</p>
    </div>
  )
};

export {StarRating};
