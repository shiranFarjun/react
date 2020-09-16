import React from 'react';

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {shouldRender: false};
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({shouldRender:true});
    }, 1000);
  }

  render() {
    return (
      this.state.shouldRender&&<div className={this.props.className}></div>
      )
  }
}


export default Box;


