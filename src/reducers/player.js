
const initialState = {
    actionsLeft: 8,
    birdsPlayed: {
        FOREST: [],
        FIELD: [],
        WATER: []
    }
};

export const player = (state = initialState, action) => {
    switch (action.type) {
        case 'PLAY_BIRD':
            const {habitat, birdId} = action.payload;
            return {
                ...state,
                actionsLeft: state.actionsLeft - 1,
                birdsPlayed: {
                    ...state.birdsPlayed,
                    [habitat]: [
                        ...state.birdsPlayed[habitat],
                        birdId
                    ]
                }
            };
        default:
            return state;
    }
};