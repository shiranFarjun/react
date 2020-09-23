import React from 'react';
import Store from './Store'
// import { Link } from 'react-router-dom';
import Display from './Display'

class Products extends React.Component {

    constructor(props) {
        super(props)
        this.state = { data: [] }
    }

    componentDidMount() {
        this.setState({ data: Store })
    }

    render() {
        return (
            <div>
                <Display data={this.state.data} />
            </div>
        )
    }
}
export default Products;

