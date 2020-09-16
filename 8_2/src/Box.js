import React from 'react';

class Box extends React.Component {
  state = {
    bgColor: [
      'red',
      'blue',
      'yellow',
      'Green',
      'Teal',
      'Fuchsia',
      'Purple',
      'Maroon'
    ],
    selectedColor: '',
    counterChangeColor: 0,
    hide: false,
    counter: 0,
    radius: 0
  };

  componentDidMount() {
    let interval = setInterval(() => {
      
      this.setState({ counter: this.state.counter + 1 });
      
      if (this.state.counter === 10) {
        return clearInterval(interval);
      } else if (this.state.counter === 5) {
        this.setState({ radius: this.state.radius + 50 });
      } else if (this.state.radius === 50 && this.state.counterChangeColor === 5) {
        this.setState({ hide: true });
        return clearInterval(interval);
      }
      console.log(this.state.counter);
      this._getRandomColor();

    }, 500);
  }

  _getRandomColor() {
    if (this.state.radius===50){
      this.setState({ counterChangeColor: this.state.counterChangeColor + 1 });
    }
    let item = this.state.bgColor[Math.floor(Math.random() * this.state.bgColor.length)];
    this.setState({
      counter: this.state.counter + 1,
      selectedColor: item,
    })
  }

  render() {
    const style = {
      backgroundColor: this.state.selectedColor,
      borderRadius: `${this.state.radius}%`
    };

    return (
      <div className="box" style={this.state.hide ? null : style}></div>
    
    );
  }
}

export default Box;
