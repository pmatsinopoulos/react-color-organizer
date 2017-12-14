import React from 'react';
import {PropTypes} from 'prop-types';

// We provide a default value for the onNewColor property
const AddColorForm = ({onNewColor = f => f}) => {
  let _title, _color;

  const submit = event => {
    event.preventDefault();
    onNewColor(_title.value, _color.value);
    _title.value = '';
    _color.value = '#000000';
    _title.focus();
  };

  return (
    <form onSubmit={submit}>
      <input type="text" placeholder="color name..." required ref={input => _title = input}/>
      <input type="color" required ref={input => _color = input}/>
      <button>ADD</button>
    </form>
  );
};

AddColorForm.propTypes = {
  onNewColor: PropTypes.func
};

AddColorForm.defaultProps = {
  onNewColor: (f) => f
};

export {AddColorForm}

