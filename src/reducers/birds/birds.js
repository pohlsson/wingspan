import birdsJSON from './birds.json';
import {mapBirds} from "./utils";
import {selectRandomBirds} from "./selectors";

const initialState = {
    birdList: mapBirds(birdsJSON),
};

const birds = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default birds;