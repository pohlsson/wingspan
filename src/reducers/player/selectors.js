const EGG_COSTS = [0, 1, 1, 2, 2];

export const selectEggCostForPlayableSpot = (state, habitat) => {
    const {birdsPlayed} = state.player;
    const playableColumn = birdsPlayed[habitat].length;
    return EGG_COSTS[playableColumn];
};