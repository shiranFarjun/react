import React from 'react';
import axios from 'axios';
import CardList from "./CardList";
import Search from "./Search";
import './App.css';

class App extends React.Component {
  state = {
    avatars: [],
    inputSearch: '',
    isVisibleImage: false
  }
  async componentDidMount() {
    const response = await axios.get(`https://randomuser.me/api`, {
      params: { results: 10 }
    });
    this.setState({
      avatars: response.data.results
    });
    console.log(this.state.avatars);
  }

  searchHandle = (val) => {
    this.setState({ inputSearch: val });
    this.setState({ isVisibleImage: true });
  }

  render() {
    return (
      <div>
        <h1>Avatars</h1>
        <Search onSearch={this.searchHandle} />
        {
          this.state.isVisibleImage
          &&
          <CardList results={this.state.avatars} inputSearchProps={this.state.inputSearch} />
        }
      </div>
    );
  }
}

export default App;
