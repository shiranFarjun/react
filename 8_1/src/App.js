
import React from 'react';
import Box from './Box';
import './Box.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { removeBoxes: false };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ removeBoxes: true })
    }, 5000)
  }

  render() {
    return (
      <div className="container">
        { this.state.removeBoxes ? null : (
          <div>
            <Box className="box1" />
            <Box className="box2" />
            <Box className="box3" />
          </div>
          )}
      </div>
    );
  }
}


export default App;