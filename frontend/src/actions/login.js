import { LOGIN, LOGOUT, UPDATE_BALANCE } from "../constants/actionTypes";
import * as api from "../api";
import * as messages from "../messages";

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: UPDATE_BALANCE, balance: data.balance });
    dispatch({ type: LOGIN, data });
    history("/");
    messages.success("Login Successful");
  } catch (error) {
    messages.error(error?.response?.data?.message || "Something went wrong");
  }
};

export const login = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch({ type: LOGIN, data });
    dispatch({ type: UPDATE_BALANCE, balance: data.balance });
    history("/");
    messages.success("Login Successful");
  } catch (error) {
    messages.error(error?.response?.data?.message || "Something went wrong");
  }
};

export const changePassword = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.changePassword(formData);
    dispatch({ type: LOGOUT, data });
    messages.success("Password Change Was Successful");
    history("/");
  } catch (error) {
    messages.error(error?.response?.data?.message || "Something went wrong");
  }
};