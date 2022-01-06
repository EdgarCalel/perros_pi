const initialState = {
    dogs: [],
    allDogs: [],
    temperaments: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_DOGS':
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            }
        case "GET_DOGS_BY_NAME":
            return {
                ...state,
                allDogs: action.payload,
            }
        case 'GET_DOGS_BY_TEMP':
            return {
                ...state,
                allDogs: action.payload,
            }
        case 'GET_TEMPERAMENTS_LIST':
            return {
                ...state,
                temperaments: action.payload
            }

        case 'FILTER_CREATED':
            const createdFilter = action.payload === 'created' ?
                state.dogs.filter(el => el.createdInDB === true) :
                state.dogs.filter(el => !el.createdInDB);
            return {
                ...state,
                allDogs: createdFilter,
            }
        case 'ORDER_BY_NAME':
            const sortedArr = action.payload === 'asc' ?
                [...state.allDogs].sort((a, b)=> {
                    if (a.name > b.name) { return 1 }
                    if (b.name > a.name) { return -1 }
                    return 0;
                }) :
                [...state.allDogs].sort(function (a, b) {
                    if (a.name > b.name) { return -1; }
                    if (b.name > a.name) { return 1; }
                    return 0;
                })
            return {
                ...state,
                allDogs: sortedArr
            }
        case 'ORDER_BY_WEIGHT':
            const sortedWeight = action.payload === 'asc' ?
                [...state.allDogs].sort( (a, b)=> a.weight_min -b.weight_min):
                [...state.allDogs].sort( (a, b)=> b.weight_min -a.weight_min) 
            return {
                ...state,
                allDogs: sortedWeight
            }
        case 'POST_DOG':
            return {
                ...state
            }
        case 'GET_DETAILS':
            return{
                ...state,
                details: action.payload
            }
        default:
            return state
    }
}



export default rootReducer;