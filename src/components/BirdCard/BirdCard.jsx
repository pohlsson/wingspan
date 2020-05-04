import React from "react";
import {habitatTypes} from "../Board/Habitat";
import RequiredHabitats from "./RequiredHabitats";
import RequiredFood from "./RequiredFood";
import {foodTypes} from "../../types";
import {StyledBirdCard, StyledNameSection, StyledRequirementsSection} from "./BirdCard.style";

const mapHabitats = (forest, field, water) => {
    let habitats = [];
    if(forest === 'y') {
        habitats.push(habitatTypes.FOREST);
    }
    if(field === 'y') {
        habitats.push(habitatTypes.FIELD);
    }
    if(water === 'y') {
        habitats.push(habitatTypes.WATER);
    }
    return habitats;
};

export const BirdCard = ({bird}) => {
    const {
        EnglishName: name,
        ScientificName: latinName,
        HabitatForest: habitatForest,
        HabitatGrasslands: habitatField,
        HabitatWetlands: habitatWater,
        FoodFish: foodFish,
        FoodFruit: foodFruit,
        FoodInvertebrate: foodInsect,
        FoodRodent: foodRodent,
        FoodSeed: foodSeed,
        FoodWild: foodWild,
        FoodNone: foodNone
    } = bird;

    const food = {
        [foodTypes.FISH]: foodFish,
        [foodTypes.FRUIT]: foodFruit,
        [foodTypes.INSECT]: foodInsect,
        [foodTypes.RODENT]: foodRodent,
        [foodTypes.SEED]: foodSeed,
        [foodTypes.WILD]: foodWild,
        [foodTypes.NONE]: foodNone,
    };

    const habitats = mapHabitats(habitatForest, habitatField, habitatWater);
    return (
        <StyledBirdCard>
            <StyledNameSection>
                <h3>{name}</h3>
                <p>{latinName}</p>
            </StyledNameSection>
            <StyledRequirementsSection>
                <RequiredHabitats habitats={habitats} />
                <RequiredFood food={food} />
            </StyledRequirementsSection>
        </StyledBirdCard>
    )
};