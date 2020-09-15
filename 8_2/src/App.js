import React from 'react';
import MakeButton from './button';
import './Btn.css';


class App extends React.Component {
  render(){
    return  (
      <div className="container">
        <MakeButton 
        text='Important'
        text='Not Important'/>
      </div>
    );
  } 
}

export default App;
