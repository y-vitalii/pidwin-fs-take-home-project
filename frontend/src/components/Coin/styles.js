import { keyframes } from "@emotion/react";

const flipTail = keyframes`
    0% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(180deg);
    }
`;

const flipHead = keyframes`
    0% {
        transform: rotateY(180deg);
    }
    100% {
        transform: rotateY(0deg);
    }
`;

export const styles = {
    head: {
        width: '60px',
        height: '60px',
        transform: "rotateY(180deg)",
    },
    tail: {
        width: '60px',
        height: '60px',
    },
    side: {
        width: '100%',
        height: '100%',
    }
}

export const animation = {
    head: {
        width: '60px',
        height: '60px',
        transformStyle: "preserve-3d",
        transition: ".4s",
        transform: "rotateY(180deg)",
        animation: `${flipHead} .5s ease-in-out forwards`
    },
    tail: {
        width: '60px',
        height: '60px',
        transformStyle: "preserve-3d",
        transition: ".4s",
        animation: `${flipTail} .5s ease-in-out forwards`
    }
}