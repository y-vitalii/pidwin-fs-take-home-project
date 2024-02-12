import React, { useCallback, useEffect, useState } from "react";
import Confetti from "react-confetti";
import { Typography } from "@mui/material";

const DURATION = 100;

const Win = ({ win, isBonus = false }) => {
    const [confetti, setConfetti] = useState(false);

    useEffect(() => {
        if (win > 0) setConfetti(true);
    }, [win]);

    const clearConfetti = useCallback(() => setConfetti(false), []);

    return win !== null ? (
        <>
            <Typography variant="h6" align="center">
                {win > 0 ?
                    `🎉 Congratulation! ${isBonus ? '🎁 Bonus!\n' : ''} Your win is $${win}!` :
                    '😢 Better Luck Next Time!'}
            </Typography>
            {confetti ? (
                <Confetti recycle={false} tweenDuration={DURATION} onConfettiComplete={clearConfetti} />
            ) : null}
        </>
    ) : <Typography variant="h6" align="center" >Wish you luck!</Typography>;
};

export default Win;