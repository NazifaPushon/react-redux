import { BUY_CAKES } from "./cakeTypes"

const initialState = {
    numOfCakes : 10
}

const cakeReduser = (state = initialState,action) => {
    switch(action.type){
        case BUY_CAKES : return {
            ...state,
            numOfCakes : state.numOfCakes - parseInt(action.payload)
        }
        default : return state
    }
}

export default  cakeReduser;