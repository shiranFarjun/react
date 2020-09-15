import React from 'react';



class MakeButton extends React.Component {
  render() {
    return (
      <div className=" ui two btn">
        <button className='bold'>{this.props.text}</button>
        <button >{this.props.text}</button>
      </div>
    );
  }
}

export default MakeButton;
