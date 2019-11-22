import React, { Component } from 'react';
import {connect} from 'react-redux';
import DropDown from '../DropDown/DropDown';
import Axios from 'axios';
import './main.css';

class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            vehicles: [],
            planets: [],
            dataHasBeenLoaded: false,
            totalTime: null,
            token: null
        }
    }

    componentDidMount(){
        // to fetch vehicles data
        Axios.get('https://findfalcone.herokuapp.com/vehicles')
        .then(value => {
            this.props.initializeVehicles(value.data);
            this.setState({
                ...this.state,
                vehicles: value.data
            })
        })
        .catch(error => {
            alert(error);
        });

        // to fetch planets data
        Axios.get('https://findfalcone.herokuapp.com/planets')
        .then(value => {
            this.setState({
                ...this.state,
                planets: value.data,
                dataHasBeenLoaded: true
            })
        })
        .catch(error => {
            alert(error);
        });

        // to retrieve token
        Axios({
            method: 'post',
            url: 'https://findfalcone.herokuapp.com/token',
            headers: {Accept: 'application/json'}
        })
        .then(value => {
            this.setState({token: value.data.token}) ;
        })
        .catch(error => {
            alert(error);
        })
    }

    calculateTime = (data) => {
        let totalTime = 0;
        for(let i=0;i<data.length;i++){
            totalTime += data[i].distance/data[i].vehicle_speed;
        }
        this.setState({totalTime: totalTime})
    }

    onClick = ()=>{
        let fArray = this.props.finalArray;
        let vehicles = fArray.map(item =>{
            return item.vehicle_name
        });
        let planets = fArray.map(item=>{
            return item.planet_name
        });
        const config = {
            method: 'post',
            url: 'https://findfalcone.herokuapp.com/find',
            headers: {Accept: 'application/json', 'Content-type': 'application/json'},
            data: {
                token: this.state.token,
                planet_names: planets,
                vehicle_names: vehicles
            }
        }
        console.log('button clicked');
        Axios(config)
        .then(value=>{
            console.log('final data', value);
        })
        .catch(error =>{
            console.log('ffff', error);
        })
    }

    render() {
        // console.log('hehehe', this.props.finalArray);
        return (
            <div className='wrapper'>
                <div className='body-container'>
                        {this.state.dataHasBeenLoaded?
                        <div className='left-container'>
                        <div className='component-container'>
                            <div className='drop-down-field-container'>
                                <label>Destination 1</label>
                                <DropDown calculateTime={this.calculateTime} name='dest-1' planets={this.state.planets} vehicles={this.state.vehicles}/>
                            </div>
                            <div className='drop-down-field-container'>
                                <label>Destination 2</label>
                                <DropDown calculateTime={this.calculateTime} name='dest-2' planets={this.state.planets} vehicles={this.state.vehicles}/>
                            </div>
                            <div className='drop-down-field-container'>
                                <label>Destination 3</label>
                                <DropDown calculateTime={this.calculateTime} name='dest-3' planets={this.state.planets} vehicles={this.state.vehicles}/>
                            </div>
                            <div className='drop-down-field-container'>
                                <label>Destination 4</label>
                                <DropDown calculateTime={this.calculateTime} name='dest-4' planets={this.state.planets} vehicles={this.state.vehicles}/>
                            </div>
                        </div>
                        <div className='button-container'> 
                            <button type='button' disabled={this.props.finalArray.length!==4}  onClick={this.onClick}>Find Falcone</button>
                        </div>
                        </div>:
                        null}
                    <div className='time-container'>
                        <div className='time-container-content'>
                            <h2>Total Time</h2>
                            {this.state.totalTime?
                            <h3>{this.state.totalTime} Sec</h3>:
                            null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return ({
        vehicles: state.vehicles,
        finalArray: state.finalArray
    })
}

const mapDispatchToProps = (dispatch)=>{
    return ({
        initializeVehicles: data=>{ dispatch({type:'INITIALIZE', payload: data})}
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
