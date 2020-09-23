import React from 'react';
import './App.css';

class TextArea extends React.Component {
  
  copyCodeToClipboard = () => {
    const el = this.textArea
    el.select()
    document.execCommand("copy")
  }

  render() {
    return (
      <div className="container">
        <div>
          <textarea
            ref={(textarea) => this.textArea = textarea}
          />
        </div>
        <div>
          <button onClick={() => this.copyCodeToClipboard()}>
            Copy 
          </button>
        </div>
      </div>
    )
  }
}
export default TextArea;