import React, { Component } from 'react';
import './result.css';

class Result extends Component {
    render() {
        return (
            <div className='wrapper'>
                <div className='container'>
                    <div className='content'>
                        <h2>Success! Congratulation on Finding Falcano, King shan will be happy!!</h2>
                        <p>Time Taken: 200</p>
                        <p>Planet Found: DonLon</p>
                    </div>
                    <div className='btn'>
                        <button>Start Again</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Result;
