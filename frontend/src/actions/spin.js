import * as api from "../api";
import { ADD_HISTORY, UPDATE_HISTORY, UPDATE_BALANCE, SET_WIN } from "../constants/actionTypes";
import * as messages from "../messages";

export const spin = (formData) => async (dispatch) => {
    try {
        const { data } = await api.sendSpin(formData);
        dispatch({ type: ADD_HISTORY, data });
        dispatch({ type: UPDATE_BALANCE, balance: data.balance });

        dispatch({ type: SET_WIN, win: data.win, isBonusWin: data.isBonusWin });
    } catch (error) {
        messages.error(error?.response?.data?.message || "Something went wrong");
    }
};

export const fetchLastSpins = (formData) => async (dispatch) => {
    try {
        const { data } = await api.getSpins(formData);
        dispatch({ type: UPDATE_HISTORY, data });
    } catch (error) {
        messages.error(error?.response?.data?.message || "Something went wrong");
    }
};
