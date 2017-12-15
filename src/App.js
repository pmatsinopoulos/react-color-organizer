import React, {Component} from 'react';
import {AddColorForm} from "./AddColorForm";
import {StarRating} from './StarRating';

class App extends Component {
  // How can our App component have access to the values of the input controls of the form?
  // We can give a callback function to AddColorForm component and let it send us back the
  // values of the input controls as filled in by the user.

  newColor(title, color) {
    console.log(`Title is: ${title}, and color is ${color}`);
  }
  render() {
    return(
      <div>
        <AddColorForm onNewColor={this.newColor}/>
        <StarRating starsSelected={3}/>
      </div>
    )
  }
}

export default App;
