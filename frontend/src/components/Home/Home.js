import React from "react";
import { Container, Grow, Paper, Typography } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";
import Game from "../Game/Game";
import Win from "../Win/Win";
import WinHistory from "../WinHistory/WinHistory";
import { styles } from "./styles";

const Home = () => {
  const balance = useSelector(state => state.balance.amount);
  const win = useSelector(state => state.win);
  const user = localStorage.getItem("profile")
    ? jwtDecode(JSON.parse(localStorage.getItem("profile")).token)
    : "null";
  const isSingedIn = user;

  return (
    <div>
        <Grow in>
            <Container component="main" maxWidth="sm">
                <Paper elevation={3} style={styles.appBar}>
                    {isSingedIn !== "null" && isSingedIn !== null && balance !== null ? (
                        <>
                            <Typography variant="h4" align="center" color="primary">
                                {`Welcome ${user.name}`}
                            </Typography>
                            <Typography variant="h6" align="center" mb={2}>
                                Play The Coin Toss Game
                            </Typography>

                            {balance > 0 ? (
                                <>
                                    <Win isBonus={!!win?.isBonusWin} win={win?.win} />
                                    <Game />
                                </>
                            ) : (
                                <Typography variant="subtitle2" align="center">
                                    Unfortunately, with a balance of 0, you are unable to play. <br />
                                    Come back to us later.
                                </Typography>
                            )}
                        </>
                    ) : (
                        <Typography variant="h4" align="center" color="primary">
                            Login to Play
                        </Typography>
                    )}
                </Paper>
            </Container>
        </Grow>
        {isSingedIn !== "null" && isSingedIn && <WinHistory />}
    </div>
  );
};

export default Home;
