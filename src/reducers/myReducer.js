const state = {
    vehicles: null,
    finalArray: []
}

const myReducer = (iState=state, action)=>{
    if(action.type==='INITIALIZE'){
        return ({
            ...iState,
            vehicles: action.payload
        })
    }
    if(action.type==='UPDATE_ARRAY'){
        return ({
            ...iState,
            finalArray: action.payload
        })
    }
    return iState;
}

export default myReducer;