import React, {Component} from 'react';
import {AddColorForm} from "./AddColorForm";
import {ColorList} from './ColorList';
import {PropTypes} from 'prop-types';

class App extends Component {
  getChildContext () {
    return {
      store: this.props.store
    }
  }

  componentWillMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const {colors, sort} = store.getState();
    const sortedColors = [...colors].sort(sortFunction(sort));
    return(
      <div className="app">
        <AddColorForm/>
        <ColorList/>
      </div>
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
};

App.childContextTypes = {
  store: PropTypes.object.isRequired
};

export default App;
