export const playBird = payload => ({
    type: 'PLAY_BIRD',
    payload
});

export const openHand = payload => ({
    type: 'OPEN_HAND',
    payload
});

export const closeHand = () => ({
    type: 'CLOSE_HAND'
});

export const drawBird = payload => ({
   type: 'DRAW_BIRD',
   payload
});