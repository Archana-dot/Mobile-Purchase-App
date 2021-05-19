import {UPDATE_PURCHASE_DETAILS} from '../Type'

export const UpdatePurchaseDetails=(value)=> {
    return {
        type: UPDATE_PURCHASE_DETAILS,
        payload: value 
    }
}
