import {UPDATE_PURCHASE_DETAILS} from '../Type'

const initialState = {
    purchase:[]
}

const purchase = (state = initialState, action) => {
    
    switch (action.type) {
        case UPDATE_PURCHASE_DETAILS :
            return {
                ...state,purchase:action.payload
            }
        default:
            return state;
    }
};

export default purchase;