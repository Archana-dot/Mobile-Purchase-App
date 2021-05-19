import {UPDATE_MOBILE_DETAILS} from '../Type'

const initialState = {
    mobile:[]
}

const mobile = (state = initialState, action) => {
    
    switch (action.type) {
        case UPDATE_MOBILE_DETAILS :
            return {
                ...state,mobile:action.payload
            }
        default:
            return state;
    }
};

export default mobile;