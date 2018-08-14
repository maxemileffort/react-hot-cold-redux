export const MAKE_GUESS = 'MAKE_GUESS'
export const makeGuess = guess => ({
    type:'MAKE_GUESS',
    guess
})


export const RESTART_GAME = 'RESTART_GAME'
export const restartGame = secretNum => ({
    type: 'RESTART_GAME',
    secretNum
})

export const GENERATE_UPDATE = 'GENERATE_UPDATE'
export const generateUpdate = auralStatus => ({
    type: 'GENERATE_UPDATE',
    auralStatus
})