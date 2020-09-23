import React from 'react';
import axios from 'axios';
import CreateBtn from './CreateBtn'
import './btn.css';

class App extends React.Component{
  state = {
    categories:[]
  };

  async componentDidMount(){
    const baseURL = 'https://api.chucknorris.io'
    const res = await axios.get(`${baseURL}/jokes/categories`)
    this.setState({categories: res.data});
  }


  render(){
    return (
      <div className="container">
        <h1>Chuck Norris jokes</h1>
        <div className='continerBtn'>
          <CreateBtn className="displayJoke" sendCategories={this.state.categories}/>
        </div>
      </div>
      );
  }
}

export default App;
