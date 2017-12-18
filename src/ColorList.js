import React from 'react';
import {Color} from './Color';
import {PropTypes} from 'prop-types';
import {removeColor} from "./actionCreators";
import {rateColor} from "./actionCreators";
import {sortFunction} from "./lib/array-helpers";

const ColorList = ({store}) => {
  const {colors, sort} = store.getState();
  const sortedColors = [...colors].sort(sortFunction(sort));
  return(
    <div className='color-list'>
      {
        sortedColors.map(color =>
          <Color key={color.id}
                 {...color}
                 onRemove={()            => store.dispatch(removeColor(color.id))}
                 onRate={(starsSelected) => store.dispatch(rateColor(color.id, starsSelected))}/>
        )
      }
    </div>
  )
};

ColorList.propTypes = {
  store: PropTypes.object
};

export {ColorList};
