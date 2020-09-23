import React from "react";

class CreatBtn extends React.Component {

  handleOnClick = (event) => {
    event.preventDefault();
    let target = event.target.innerHTML;
    console.log(target);
    this.props.onClikApp(target);

  };

  render() {
    const btns = this.props.color.map((color) => {
      return <button key={color} onClick={this.handleOnClick} className={color}>{color}</button>  
    });

    return (
      <div>
        {btns}
      </div>
    );
  }
}

export default CreatBtn;
