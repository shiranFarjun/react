import React from 'react';

class CheckBox extends React.Component {
    state = { isChecked: false };
    
    render() {
        return (
            <form>
                <input
                    name={this.props.context}
                    type="checkbox"
                    defaultChecked={this.props.marked}
                    onChange={e=> this.setState({ isChecked: true })} />
                <label>
                    {this.props.context}
                </label>
                <br />
            </form>
        );
    }
}
export default CheckBox;

