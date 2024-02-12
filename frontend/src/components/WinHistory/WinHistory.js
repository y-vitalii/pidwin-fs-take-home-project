import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Paper, Typography } from "@mui/material";
import { COIN_COLOR, HISTORY_LIMIT } from "../../constants/constants";
import { fetchLastSpins } from "../../actions/spin";
import Coin from "../Coin/Coin";
import { styles } from "./styles";

const WinHistory = () => {
    const dispatch = useDispatch();
    const history = useSelector(state => state.history.history);

    useEffect(() => {
        dispatch(fetchLastSpins({ limit: HISTORY_LIMIT }));
    }, []);

    return history.length ? (
        <Paper style={styles.paper} elevation={3}>
            <Typography variant="h4" color="primary" mb={2}>Last Bets History:</Typography>
            <Container style={styles.container}>
                {history.map(({ bet, win, coin, isBonusWin }, index) => (
                    <Box key={index} mr={1} style={styles.coinBox}>
                        <div style={isBonusWin ? styles.coinBonus : styles.coin}>
                            <Coin side={coin} color={win > 0 ? COIN_COLOR.gold : COIN_COLOR.grey} />
                        </div>
                        <div>
                            <Typography>Bet: {bet}</Typography >
                            <Typography mt={-.5}>Win: {win}</Typography >
                            {isBonusWin && <Typography variant="body2">&#127873; Bonus</Typography >}
                        </div>
                    </Box>
                ))}
            </Container>
        </Paper>
    ) : null;
};

export default WinHistory;