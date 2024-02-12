import { combineReducers } from "redux";
import login from "./login";
import balance from "./balance";
import history from "./history";
import win from "./win";

export default combineReducers({
    login, balance, history, win
});
