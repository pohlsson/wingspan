import {StyledBirdCardSelector} from "./BirdCardSelector.style";
import React from "react";
import BirdCard from "../../BirdCard";
import {useDispatch, useSelector} from "react-redux";
import {selectAllowedHabitatsById, selectFoodCostById} from "../../../reducers/birds/selectors";
import {playBird} from "../../../actions/birds";
import {foodTypes} from "../../../types";
import {selectEggCostForPlayableSpot} from "../../../reducers/player/selectors";

export const BirdCardSelector = ({birdId, onPlayBirdCard}) => {
    const dispatch = useDispatch();
    const {newBirdData, foodInSupply, eggsInSupply}  = useSelector(state => state.player);
    const eggCost = useSelector(state => selectEggCostForPlayableSpot(state, newBirdData.habitat));
    const allowedHabitats = useSelector(state => selectAllowedHabitatsById(state.birds, birdId));
    const foodCost = useSelector(state => selectFoodCostById(state.birds, birdId));

    const checkIfPlayerHasRequiredFoodInSupply = () => {
        let foodRequirementsAreMet = true;
        Object.keys(foodCost).forEach(foodType => {
            const requiredAmount = foodCost[foodType];
            const foodTypeIsNoneOrWild = foodType === foodTypes.NONE || foodType === foodTypes.WILD;
            if (foodInSupply[foodType] < requiredAmount && !foodTypeIsNoneOrWild) {
                foodRequirementsAreMet = false;
            }
        });
        return foodRequirementsAreMet;
    };

    const checkIfBirdIsPlayable = () => {
        const habitatIsOk = allowedHabitats[newBirdData.habitat];
        const playerHasRequiredFoodInSupply = checkIfPlayerHasRequiredFoodInSupply();
        const playerHasEnoughEggsInSupply = eggsInSupply >= eggCost;
        return habitatIsOk && playerHasRequiredFoodInSupply && playerHasEnoughEggsInSupply;
    };

    const playBirdCard = () => {
        if (!!newBirdData && checkIfBirdIsPlayable()) {
            dispatch(playBird({
                habitat: newBirdData.habitat,
                birdId,
                foodCost,
                eggCost
            }));
            onPlayBirdCard();
        }
    };
    console.log(foodInSupply)
    return (
        <StyledBirdCardSelector onClick={playBirdCard} playable={checkIfBirdIsPlayable()}>
            <BirdCard birdId={birdId}/>
        </StyledBirdCardSelector>
    )
};