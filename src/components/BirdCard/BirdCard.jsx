import React from "react";
import {habitatTypes} from "../Board/Habitat";
import RequiredHabitats from "./RequiredHabitats";
import RequiredFood from "./RequiredFood";
import {foodTypes} from "../../types";
import {StyledBirdCard, StyledRequirementsSection} from "./BirdCard.style";
import NameSection from "./NameSection";
import {useSelector} from "react-redux";
import {selectBirdById} from "../../reducers/birds/selectors";

const mapHabitats = (forest, field, water) => {
    let habitats = [];
    if (forest) {
        habitats.push(habitatTypes.FOREST);
    }
    if (field) {
        habitats.push(habitatTypes.FIELD);
    }
    if (water) {
        habitats.push(habitatTypes.WATER);
    }
    return habitats;
};

export const BirdCard = ({birdId}) => {
    const bird = useSelector(state => selectBirdById(state.birds, birdId));
    const {
        name,
        latinName,
        habitatForest,
        habitatField,
        habitatWater
    } = bird;
    const food = {
        [foodTypes.FISH]: bird.foodFish,
        [foodTypes.FRUIT]: bird.foodFruit,
        [foodTypes.INSECT]: bird.foodInsect,
        [foodTypes.RODENT]: bird.foodRodent,
        [foodTypes.SEED]: bird.foodSeed,
        [foodTypes.WILD]: bird.foodWild,
        [foodTypes.NONE]: bird.foodNone,
    };

    const habitats = mapHabitats(habitatForest, habitatField, habitatWater);
    return (
        <StyledBirdCard>
            <NameSection name={name} latinName={latinName}/>
            <StyledRequirementsSection>
                <RequiredHabitats habitats={habitats}/>
                <RequiredFood food={food}/>
            </StyledRequirementsSection>
        </StyledBirdCard>
    )
};