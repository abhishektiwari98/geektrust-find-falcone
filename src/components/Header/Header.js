import React, { Component } from 'react';
import './header.css';

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
