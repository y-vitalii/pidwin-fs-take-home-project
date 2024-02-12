import React, { useEffect, useState } from "react";
import { COIN_COLOR, COIN_SIDE } from "../../constants/constants";
import CoinIconTail from "../Icons/CoinIconTail";
import CoinIconHead from "../Icons/CoinIconHead";
import { styles, animation } from "./styles";

const Coin = ({ side = COIN_SIDE.head, color = COIN_COLOR.gold, animate = false }) => {
    const [currentSide, setCurrentSide] = useState(side);

    useEffect(() => {
        // Wait for the coin flip animation to finish halfway
        setTimeout(() => setCurrentSide(side), 100);
    }, [side]);

    return (
        <div style={animate ? animation[side] : styles[side]}>
            {
                currentSide === COIN_SIDE.head
                    ? <CoinIconHead style={styles.side} color={color} />
                    : <CoinIconTail style={styles.side} color={color} />
            }
        </div>
    );
};

export default Coin;