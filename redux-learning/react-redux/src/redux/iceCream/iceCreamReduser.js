import { BUY_ICE_CREAM } from "./iceCreamTypes";

const initialState = {
    numOfIcecream : 20
}
const IceCreamReduser = (state = initialState,action) => {
    switch (action.type) {
        case BUY_ICE_CREAM:return {
            ...state,
            numOfIcecream:state.numOfIcecream - 1
        }
        default : return state
    }
}

export default IceCreamReduser