import { Button, CircularProgress, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { COIN_SIDE } from "../../constants/constants";
import { spin } from "../../actions/spin";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Coin from "../Coin/Coin";
import * as messages from "../../messages";
import { styles } from "./styles";

const Game = () => {
    const dispatch = useDispatch();
    const token = JSON.parse(localStorage.getItem("profile")).token;
    const balance = useSelector(state => state.balance.amount);
    const [bet, setBetValue] = useState(0);
    const [coinSide, setCoinSide] = useState(COIN_SIDE.head);
    const [requestInFlight, setRequestInFlight] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (bet === 0) {
            messages.error('Invalid bet amount');
            return;
        }
        if (!requestInFlight) {
            setRequestInFlight(true)
            const data = {
                token,
                bet,
                coin: coinSide
            }
            dispatch(spin(data)).then((e) => setRequestInFlight(false));
        }
    };

    const handleInputChange = (e) => {
        const { value } = e.target;

        if (value > balance) {
            messages.error('Bet cannot exceed balance');
        } else if (value >= 0) {
            setBetValue(+value);
        }
    };

    const handleRadioChange = (e) => {
        setCoinSide(e.target.value);
    };

    const flipCoin = () => {
        setCoinSide((current) => (
            current === COIN_SIDE.head ? COIN_SIDE.tail : COIN_SIDE.head
        ));
    };

    return (
        <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.radioButtons}>
                <Typography>Select a coin side:</Typography>
                <label htmlFor={COIN_SIDE.head} style={styles.radio}>
                    <input
                        type="radio"
                        id={COIN_SIDE.head}
                        name="coinSide"
                        value={COIN_SIDE.head}
                        checked={coinSide === COIN_SIDE.head}
                        onChange={handleRadioChange}
                    />
                    <Typography>Head</Typography>
                </label>

                <label htmlFor={COIN_SIDE.tail} style={styles.radio}>
                    <input
                        type="radio"
                        id={COIN_SIDE.tail}
                        name="coinSide"
                        value={COIN_SIDE.tail}
                        checked={coinSide === COIN_SIDE.tail}
                        onChange={handleRadioChange}
                    />
                    <Typography>Tail</Typography>
                </label>
            </div>

            <div style={styles.coin} onClick={flipCoin}>
                <Coin side={coinSide} animate />
            </div>

            <div style={styles.bet}>
                <Typography>Enter your bet:</Typography>
                <TextField
                    type="number"
                    value={bet}
                    onChange={handleInputChange}
                    variant="standard"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <MonetizationOnIcon style={styles.icon}/>
                            </InputAdornment>
                        ),
                    }}
                />
            </div>

            <Button
                variant="contained"
                type="submit"
                disabled={!bet || requestInFlight}
                style={styles.button}
            >
                { requestInFlight ? <CircularProgress size={25} /> : 'Play' }
            </Button>
        </form>
    );
}

export default Game;