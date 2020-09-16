import React from 'react';
import Spinner from './Spinner.js';

import './Spinner.css';

class App extends React.Component {
  state = {
    showSpinner: true,
    numSeconds: 10000,
    showTimer: 10
  };

  componentDidMount() {
    let timeLeft = this.state.numSeconds;

    let countDownTimer = setInterval(() => {
      if (timeLeft === 0) {
        clearInterval(countDownTimer)
      }else{
        timeLeft -= 1000;
        this.setState({ showTimer: timeLeft / 1000 });
      }
    }, 1000);

    setTimeout(() => {
      this.setState({ showSpinner: false });
    }, this.state.numSeconds);   //=> after 10 second=10000
  }

  render() {
    return (
      <div className="App">
        {
          <div className="counter">
            timer: {this.state.showTimer}   
          </div>
        }
        {
          this.state.showSpinner && <Spinner/>
        }
      </div>
    );
  }
}

export default App;
