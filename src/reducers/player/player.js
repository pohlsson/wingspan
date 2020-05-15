
const initialState = {
    actionsLeft: 8,
    birdsInHand: [],
    birdsPlayed: {
        FOREST: [3],
        FIELD: [],
        WATER: []
    },
    foodInSupply: {
        INSECT: 5,
        FRUIT: 5,
        SEED: 5,
        FISH: 5,
        RODENT: 5,
    },
    eggsInSupply: 10,
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

const payFoodCost = (state, foodCost) => {
    let foodInSupply = state.foodInSupply;
    Object.keys(foodCost).forEach(foodType => {
        if (foodType === foodType.NONE) {
            return;
        }
        if(foodType === foodType.WILD) {
            const availableFoodTypes = Object.keys(state.foodInSupply);
            const foodTypeToPay = state.foodInSupply[availableFoodTypes[ availableFoodTypes.length * Math.random() << 0]];
            foodInSupply[foodTypeToPay] -= foodCost[foodType]
        } else {
            foodInSupply[foodType] -= foodCost[foodType]
        }
    });
    return foodInSupply;
};

const player = (state = initialState, action) => {
    switch (action.type) {
        case 'PLAY_BIRD':
            const {habitat, birdId, foodCost} = action.payload;
            return {
                ...state,
                actionsLeft: state.actionsLeft - 1,
                foodInSupply: payFoodCost(state, foodCost),
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