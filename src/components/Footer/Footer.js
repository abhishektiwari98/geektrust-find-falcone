import React, { Component } from 'react'
import './footer.css';

export class Footer extends Component {
    render() {
        return (
            <>
                <div class="footer">
                    <div class="footer-container">
                        <div className='footer-content'>
                            <p>@copyright: </p>
                            <p>Gmail: xyz@gmail.com</p>
                            <p>Tel: +91 12345678</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Footer
