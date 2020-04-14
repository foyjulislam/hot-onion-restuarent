import React from 'react';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="container">
                <div className="row d-flex align-items-center justify-content-between">
                    <div className="col">
                        <div className="logo-aria">
                            <Link to="/">
                                <img src={logo} alt="logo missing"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="header-right">
                            <div className="d-flex">
                                <Link to="/cart">    
                                    <span className="cart-icon">
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;