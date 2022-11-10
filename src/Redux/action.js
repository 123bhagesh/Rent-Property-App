import * as types from './actionTypes'

const getData = (payload)=>{
    return {
        type: types.GET_DATA,
        payload
    }
}