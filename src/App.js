import React, {Component} from 'react';
import {AddColorForm} from "./AddColorForm";
import {ColorList} from './ColorList';
import {v4} from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [{
        id: v4(),
        title: "ocean at dusk",
        color: "#00c4e2",
        rating: 0
      }]
    };
    this.newColor = this.newColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
  }

  // How can our App component have access to the values of the input controls of the form?
  // We can give a callback function to AddColorForm component and let it send us back the
  // values of the input controls as filled in by the user.

  newColor(title, color) {
    console.log(`Title is: ${title}, and color is ${color}`);
    const newState = {colors: [...this.state.colors, {id: v4(), title, color, rating: 0}]};
    this.setState(newState);
  }

  removeColor(colorIndex) {
    const newState = {colors: this.state.colors.filter((color, i) => i !== colorIndex)};
    this.setState(newState);
  }

  render() {
    return(
      <div>
        <AddColorForm onNewColor={this.newColor}/>
        <ColorList colors={this.state.colors} onRemove={(colorIndex) => this.removeColor(colorIndex)}/>
      </div>
    )
  }
}

export default App;
