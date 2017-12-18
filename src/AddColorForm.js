import React from 'react';
import {PropTypes} from 'prop-types';
import {addColor} from './actionCreators';

// We provide a default value for the onNewColor property
const AddColorForm = (props, {store}) => {
  let _title, _color;

  const submit = event => {
    event.preventDefault();
    store.dispatch(addColor(_title.value, _color.value));

    _title.value = '';
    _color.value = '#000000';
    _title.focus();
  };

  return (
    <form className="addColor" onSubmit={submit}>
      <input type="text" placeholder="color name..." required ref={input => _title = input}/>
      <input type="color" required ref={input => _color = input}/>
      <button>ADD</button>
    </form>
  );
};

AddColorForm.contextTypes = {
  store: PropTypes.object
};

export {AddColorForm}

