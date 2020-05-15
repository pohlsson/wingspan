import {foodTypes, habitatTypes} from "../../types";

const selectBirdList = state => state.birdList;

export const selectBirdById = (state, birdId) => {
    const birdList = selectBirdList(state);
    return birdList.find(bird => bird.id === birdId);
};

export const selectRandomBirds = (state, nrOfBirds) => {
    const birdList = selectBirdList(state);
    const randomBirds = [];
    for (let i = 0; i < nrOfBirds; i += 1) {
        randomBirds.push(Math.floor(Math.random() * birdList.length));
    }
    return randomBirds;
};

export const selectAllowedHabitatsById = (state, birdId) => {
    const {habitatForest, habitatField, habitatWater} = selectBirdById(state, birdId);
    return {
        [habitatTypes.FOREST]: habitatForest,
        [habitatTypes.FIELD]: habitatField,
        [habitatTypes.WATER]: habitatWater
    }
};

export const selectFoodCostById = (state, birdId) => {
    const {foodInsect, foodFish, foodFruit, foodRodent, foodSeed, foodWild, foodNone} = selectBirdById(state, birdId);
    const foodCosts = {
        [foodTypes.INSECT]: foodInsect,
        [foodTypes.FISH]: foodFish,
        [foodTypes.FRUIT]: foodFruit,
        [foodTypes.RODENT]: foodRodent,
        [foodTypes.SEED]: foodSeed,
        [foodTypes.WILD]: foodWild,
        [foodTypes.NONE]: foodNone
    };

    Object.keys(foodCosts).forEach(foodType => {
        if(foodCosts[foodType] <= 0) {
            delete foodCosts[foodType];
        }
    });

    return foodCosts;

};