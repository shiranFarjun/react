import React from 'react';
import SearchBar from './SearchBar';


class App extends React.Component {
  // const category=["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"];

  onSearchSubmit(term){
    console.log(term);
  }
  render() {
    return (
      <div className="continer" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}
export default App;