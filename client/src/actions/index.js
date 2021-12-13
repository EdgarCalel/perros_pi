import axios from 'axios';

export function allPerros(){
return async function (dispatch){
    const apiInfo = await axios.get('http://localhost:4000/dogs')
    console.log(apiInfo)
    return dispatch({
        type:'ALL_DOGS',
        payload: apiInfo.data
    })
}}

export function allId(){
return async function(dispatch){
    const tem = await axios.get('http://localhost:4000/dogsi/:id')
    return dispatch({
        type: 'GET_ID',
        payload: tem.data
    })
}
}
