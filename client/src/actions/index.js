
import axios from 'axios';
require('dotenv').config();
const {
    REACT_APP_SERVER,
  } = process.env;

export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}
export function orderByWeight(payload) {
    return {
        type: 'ORDER_BY_WEIGHT',
        payload
    }
}
export function getDogs() {
    return async function (dispatch) {
        var json = await axios.get(`https://dogs-kll.herokuapp.com/dogs`)
        return dispatch({
            type: 'GET_DOGS',
            payload: json.data,
        })
    }
}
export function getDogsByName(name) {
    return async function (dispatch) {
        const { data } = await axios.get(`${REACT_APP_SERVER}/dogsName/${name}`);
        return dispatch({
            type: "GET_DOGS_BY_NAME",
            payload: data
        });
    };
}

export function getTemperamentsList() {
    return async function (dispatch) {
        var json = await axios.get(`${REACT_APP_SERVER}/temperamentos`);
        var listOfTemperaments = json.data.map(el => el.name)
        return dispatch({
            type: 'GET_TEMPERAMENTS_LIST',
            payload: listOfTemperaments
        });
    }
}

export function postDog(payload) {
    return async function () {
        const response = await axios.post(`${REACT_APP_SERVER}/dogs`, payload);
        return response;
    }
}

export function filterDogsByTemperament(payload) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`${REACT_APP_SERVER}/temperamentoFilter/?temperament=${payload}`);
            return dispatch({
                type: 'GET_DOGS_BY_TEMP',
                payload: json.data
            })
        } catch (error) {
            console.log(error, "Error on the filters in actions file")
        }
    }
}
export function filterCreated(payload) {
    return {
        type: 'FILTER_CREATED',
        payload
    }
}

export function getDetails(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`${REACT_APP_SERVER}/dogsi/${id}`)
            return dispatch({
                type: 'GET_DETAILS',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function LimpiarDetail(){
    return{
        type: 'LIMPIAR_DETAILS',
    }
}
export function ByTemperamento(temperament){
    return{
        type: 'BY_TEMPERAMENTO',
        payload:temperament
    }
}
