import React from 'react';
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">HOME </Link>
                <Link to="/products"> PRODUCTS </Link>
            </div>
        );
    }
}

export default Header;



