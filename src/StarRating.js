import React from 'react';
import {Star} from './Star';
import {PropTypes} from 'prop-types';

const createReactClass = require('create-react-class');

const StarRating = createReactClass({
  displayName: 'StarRating',
  propTypes: {totalStars: PropTypes.number},
  getDefaultProps() {
    return {totalStars: 5}
  },
  getInitialState() {
    return {
      starsSelected: 0
    }
  },
  change(starsSelected) {
    this.setState({starsSelected})
  },
  render() {
    const {totalStars} = this.props;
    const {starsSelected} = this.state;
    return(
      <div className="starRating">
        {
          Array(totalStars).fill().map( (_, i) => <Star key={i} selected={starsSelected > i} onClick={() => this.change(i + 1)}/>)
        }
        <button onClick={() => this.change(0)}>clear</button>
        <p>{starsSelected} of {totalStars} stars</p>
      </div>
    )
  }
});

export {StarRating};
