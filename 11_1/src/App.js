import React from 'react';
import CheckBox from './CheckBox';

class App extends React.Component {
  render() {
    return (
      <div>
        <CheckBox context="I read the term of the app" marked={false}/>
        <CheckBox context="I accept the term of the app" marked={false}/>
        <CheckBox context="I want to get the weekly news letter" marked={true}/>
        <CheckBox context="I want to get sales and offers" marked={true}/>
        <button type="submit">Submit</button>
      </div>
    );
  }
}
export default App;