import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Header = ({ isLoggedIn }) => {
    return (
        <div className="ui fixed inverted menu">
            <div className="ui container">
                <div className="header item">
                    Bounds
                </div>
                <Link className="item" to="/">Home</Link>
                {!isLoggedIn ?
                <Link className="item" to="/login">Login</Link>
                :
                null
                }
                {!isLoggedIn ?
                <Link className="item" to="/signup">Signup</Link>
                :
                <a className="item">Logout</a>
                }
            </div>
        </div>
    )
};

Header.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}

export default Header;
