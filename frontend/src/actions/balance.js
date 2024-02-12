import * as api from "../api";
import * as messages from "../messages";
import { UPDATE_BALANCE } from "../constants/actionTypes";

export const fetchBalance = () => async (dispatch) => {
    try {
        const { data } = await api.getBalance();
        dispatch({ type: UPDATE_BALANCE, balance: data.balance });
    } catch (error) {
        messages.error(error?.response?.data?.message || "Something went wrong");
    }
};
