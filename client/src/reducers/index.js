const initialState ={
    dogs:[],
    getId:[]
}

 function rootReducer(state = initialState, action){
    switch (action.type) {
        case 'ALL_DOGS':
        return {...state,dogs: action.payload }

        case 'GET_ID':
            return {...state, getId: action.payload}
       
        default: 
        return state
    }
}
export default  rootReducer