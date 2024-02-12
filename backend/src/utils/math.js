// TODO: Transfer the data to env config
export const WIN_PROBABILITY = 0.5;
export const BET_MULTIPLIER = 2;
export const DEFAULT_STREAK_MULTIPLIER = 1;
export const STREAK_MULTIPLIER = {
    3: 3,
    5: 10
}
export const MAX_STREAK = 5;
export const NEW_USER_TOKENS = 100;

/**
 * Calculates the win amount for a given bet and streak.
 *
 * @param {number} currentBet - The amount of the current bet.
 * @param {number} streak - The streak achieved by the user.
 * @returns {Object} - An object containing the win amount and a flag indicating if it's a bonus win.
 */
const calculateWin = (currentBet, streak) => {
    let win = 0;
    const multiplier = STREAK_MULTIPLIER[streak];
    let isBonusWin = false;

    if (Math.random() < WIN_PROBABILITY) {
        win = currentBet * (multiplier || BET_MULTIPLIER);
        isBonusWin = !!multiplier;
    }

    return { win, isBonusWin };
}

/**
 * Updates the balance after a spin based on the bet amount and win amount.
 *
 * @param {number} balance - The current balance of a user.
 * @param {number} bet - The amount of a bet placed.
 * @param {number} win - The amount won from a spin.
 * @returns {number} - The updated balance after the spin.
 */
const updateBalanceAfterSpin = (balance, bet, win) => {
    if (win > 0) {
        balance += (win - bet);
    } else {
        balance -= bet;
    }

    return balance;
}

/**
 * Updates the streak after a spin.
 *
 * @param {number} streak - The current streak achieved by the user.
 * @param {number} win - The amount won from a spin.
 * @returns {number} - The updated streak after the spin.
 */
const updateStreak = (streak, win) => {
    return streak >= MAX_STREAK || win <= 0 ? DEFAULT_STREAK_MULTIPLIER : ++streak;
}

export { calculateWin, updateBalanceAfterSpin, updateStreak };