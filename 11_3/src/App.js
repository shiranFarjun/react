import React from "react";
import CreatBtn from "./CreatBtn";
import './App.css';


class App extends React.Component {
  state = {
    color:null
  };
  handleOnClick=(color)=>{
    this.setState({ color:color });
  }
  render() {
    const colors=['blue','red','yellow'];
    return (
      <div>
        <CreatBtn onClikApp={this.handleOnClick} color={colors}></CreatBtn>
        <h2>The color selected is: {this.state.color}</h2>
      </div>
      
    );
  };
};

export default App;
