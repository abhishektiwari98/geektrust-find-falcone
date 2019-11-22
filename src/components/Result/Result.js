import React, { Component } from 'react';
import './result.css';
import { connect } from 'react-redux';

class Result extends Component {
    constructor(props){
        super(props);
    }
    onClick = ()=>{
        this.props.history.push('/');
    }
    render() {
        console.log('inside result', this.props);
        return (
            <div className='wrapper'>
                <div className='container'>
                    <div className='content'>
                        {this.props.resultData && this.props.resultData.status?
                        <>
                        <h2>Success! Congratulation on Finding Falcano, King shan will be happy!!</h2>
                        <p>Planet Found: {this.props.resultData.planet_name}</p>
                        </>:
                        <h2>You couldn't find queen, King will be angry :(</h2>
                        }
                    </div>
                    <div className='btn'>
                        <button onClick={this.onClick}>Start Again</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return ({
        resultData: state.resultData
    })
}


export default connect(mapStateToProps)(Result);
