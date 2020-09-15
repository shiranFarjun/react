import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  toggleDiv = () => {
    const { show } = this.state
    this.setState({ show: !show });
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.toggleDiv}>show/hide</button>
        {this.state.show && <Box/>}
      </div>
    );
  }
}

class Box extends React.Component{
  render() {
    return (
      <div className="box"></div>
    )
  }
}
export default App;