import React, { Component } from 'react';
import {PropTypes} from 'prop-types';

class AddColorForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.newColor = this.props.onNewColor;
  }

  submit(event) {
    event.preventDefault();
    console.log(`submit() method inside AddColorForm executed`);
    this.newColor(this.refs._title.value, this.refs._color.value);

    // Do I send the values to the backend here? I may need to do that.

    // reset form fields
    this.refs._title.value = '';
    this.refs._color.value = '#000000';
  }
  render() {
    return(
      <form onSubmit={this.submit}>
        <input type="text" placeholder="color name..." required ref="_title"/>
        <input type="color" required ref="_color"/>
        <button>ADD</button>
      </form>
    )
  }
}

AddColorForm.propTypes = {
  onNewColor: PropTypes.func
};

AddColorForm.defaultProps = {
  onNewColor: (f) => f
};

export {AddColorForm}

