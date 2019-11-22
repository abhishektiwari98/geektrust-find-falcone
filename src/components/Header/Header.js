import React, { Component } from 'react';
import './header.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

class Header extends Component {
    render() {
        return (
            <>
                 <div class="header">
                    <div class="header-container">
                        <nav>
                            <a href="#">Home</a>
                            <a href="#">Reset</a>
                        </nav>
                       
                    </div>
                </div>
            </>
        )
    }
}

export default Header;
