import axios from 'axios'
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"
export const fetchUserRequest = () => {
    return {
        type:FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload:users
    }
}

export const fetchUserFailuer = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload:error
    }
}

export const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUserRequest())
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            const users = res.data
            dispatch(fetchUserSuccess(users))
        })
        .catch(error => {
            dispatch(fetchUserFailuer(error.message))
        })
    }
}