import { UPDATE_BALANCE } from "../constants/actionTypes";

const balanceReducer = (state = { amount: null }, action) => {
    switch (action.type) {
        case UPDATE_BALANCE:
            return {
                ...state,
                amount: action.balance
            }
        default:
            return state;
    }
}
export default balanceReducer;