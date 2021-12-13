const initialState={
    dogs : []
}
export default function rootReducer (state = initialState, action){
switch(action.type){
case 'G_dogs':
    return{
        ...state,
        dogs:action.payload
    }
    default:return state;
}
}
