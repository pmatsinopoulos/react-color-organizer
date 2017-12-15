import React, {Component} from 'react';
import {Star} from './Star';
import {PropTypes} from 'prop-types';

class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starsSelected: props.starsSelected || 0
    };
    this.change = this.change.bind(this);
  }

  change(starsSelected) {
    this.setState({starsSelected})
  }
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
}

StarRating.propTypes = {
  totalStars: PropTypes.number
};

StarRating.defaultProps = {
  totalStars: 5
};

export {StarRating};
