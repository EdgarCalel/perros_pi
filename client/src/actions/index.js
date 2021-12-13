import { axios } from 'axios'

// export const getDogs =()=>(dispatch)=>{
//     dispatch({
//         type: 'http://localhost:3001/dogs',
//         payload: JSON.data
//     })
//     }

    export function getDogs(){
       return async function(dispatch){
           var json = axios("http://localhost:3001/dogs",{});
       return dispatch({
            type: 'G_dogs',
            payload: json.data
        })
        }
    }