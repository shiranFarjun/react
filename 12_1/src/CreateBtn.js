import React from 'react';
import './index.css';
import axios from 'axios';

class CreateBtn extends React.Component{
  state = {
    joke:' '
  };

  async getJoke(e){
    const baseURL = 'https://api.chucknorris.io'
    const jokeRes = await axios.get(`${baseURL}/jokes/random`,{category: e.target.innerHTML});
    this.setState({joke: jokeRes.data.value});
  }
  

  render(){
    const btns = this.props.sendCategories.map((elment) => {
      return <button key={elment} onClick={this.getJoke.bind(this)} >{elment}</button>  //create btn to for each of the category
    });
  
    return(
      <div>
        {btns}
        <div className={this.props.className}>{this.state.joke}</div>
      </div>
    );

  }
}

export default CreateBtn;
