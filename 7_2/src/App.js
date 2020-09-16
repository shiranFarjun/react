import React from 'react';

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
      <div className="">
        <button onClick={this.toggleDiv}>show/hide</button>
        {this.state.show && <Box />}
      </div>
    );
  }
}

class Box extends Component() {
  render() {
    return (
      <div className="box"></div>
    )
  }
}
export default App;