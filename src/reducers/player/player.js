
const initialState = {
    actionsLeft: 8,
    birdsInHand: [],
    birdsPlayed: {
        FOREST: [3],
        FIELD: [],
        WATER: []
    },
    isHandOpen: false,
    newBirdData: undefined,
};

const removeBirdFromHand = (state, birdId) => {
    const birdsInHand = state.birdsInHand;
    const index = birdsInHand.indexOf(birdId);
    if (index > -1) {
        birdsInHand.splice(index, 1);
    }
    return birdsInHand;
};


const player = (state = initialState, action) => {
    switch (action.type) {
        case 'PLAY_BIRD':
            const {habitat, birdId} = action.payload;
            return {
                ...state,
                actionsLeft: state.actionsLeft - 1,
                birdsInHand: removeBirdFromHand(state, birdId),
                birdsPlayed: {
                    ...state.birdsPlayed,
                    [habitat]: [
                        ...state.birdsPlayed[habitat],
                        birdId
                    ]
                }
            };
        case 'OPEN_HAND':
            const {newBirdData} = action.payload;
            return {
                ...state,
                isHandOpen: true,
                newBirdData
            };
        case 'CLOSE_HAND':
            return {
                ...state,
                isHandOpen: false,
                newBirdData: null,
            };
        case 'DRAW_BIRD':
            const {birds} = action.payload;
            return {
                ...state,
                birdsInHand: [
                    ...state.birdsInHand,
                    ...birds
                ]
            };
        default:
            return state;
    }
};

export default player;