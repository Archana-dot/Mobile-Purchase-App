import {UPDATE_MOBILE_DETAILS} from '../Type'

export const UpdateMobileDetails=(value)=> {
    return {
        type: UPDATE_MOBILE_DETAILS,
        payload: value 
    }
}
