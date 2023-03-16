import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Headerprops extends Component {
    render() {

        return (
            <>

        <li className="nav-item">
        <Link className="nav-link js-scroll-trigger" to={this.props.link}> {this.props.name} </Link>
		</li>
        </>
        );
    }
}

export default Headerprops;


