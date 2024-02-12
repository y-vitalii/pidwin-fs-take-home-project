import { ADD_HISTORY, UPDATE_HISTORY } from '../constants/actionTypes';
import { HISTORY_LIMIT } from "../constants/constants";

const historyReducer = (state = { history: [] }, action) => {
    switch (action.type) {
        case UPDATE_HISTORY:
            return {
                ...state,
                history: action.data,
            };
        case ADD_HISTORY:
            const updatedWins = [action.data, ...state.history];
            if (updatedWins.length > HISTORY_LIMIT) updatedWins.length--;
            return {
                ...state,
                history: updatedWins
            }
        default:
            return state;
    }
}
export default historyReducer;