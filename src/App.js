import React from 'react';
import {AddColorForm} from "./AddColorForm";
import {ColorList} from './ColorList';
import {PropTypes} from 'prop-types';

const App = () =>
  <div className="app">
    <AddColorForm/>
    <ColorList/>
  </div>
;

export default App;
