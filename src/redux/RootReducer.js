import {combineReducers} from 'redux'
import PurchaseReducer from './reducer/Purchase'
import MobileReducer from './reducer/Mobile'

const RootReducer = combineReducers({
        purchase : PurchaseReducer,
        mobile : MobileReducer,
})
export default RootReducer