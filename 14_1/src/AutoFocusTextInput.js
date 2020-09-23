import React from 'react';
import CustomTextInput from "./CustomTextInput";

// use a ref to get access to the custom input and call
// its focusTextInput method manually


class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <CustomTextInput ref={this.textInput} />
    );
  }
}

export default AutoFocusTextInput;