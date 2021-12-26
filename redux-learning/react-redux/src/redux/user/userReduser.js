import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"

export const initialState = {
    loading:false,
    users:[],
    error:''
}
const userReduser = (state = initialState,action) => {
    switch(action.type){
        case FETCH_USER_REQUEST : return {
            ...state,
            loading:true
        }
        case FETCH_USER_SUCCESS : return {
            ...state,
            users:action.payload,
            loading:false,
            error:''
        }
        case FETCH_USER_FAILURE : return {
            ...state,
            users:[],
            error:action.payload
        }
        default : return state
    }
    
}

export default userReduser

