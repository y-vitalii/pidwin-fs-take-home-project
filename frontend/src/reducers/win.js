import { SET_WIN } from '../constants/actionTypes';

const winReducer = (state = { win: null, isBonusWin: false }, action) => {
    switch (action.type) {
        case SET_WIN:
            return {
                ...state,
                isBonusWin: action.isBonusWin,
                win: action.win
            }
        default:
            return state;
    }
}
export default winReducer;