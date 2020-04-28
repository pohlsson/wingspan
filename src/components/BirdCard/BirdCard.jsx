import React from "react";
import styled from 'styled-components';
import {HabitatSymbol} from "../HabitatSymbol/HabitatSymbol";
import {habitatTypes} from "../Board/Habitat";
import {RequiredHabitats} from "./RequiredHabitats/RequiredHabitats";

const StyledBirdCard = styled.div`
    background-color: #ddd;
    height: 100%;
    position: relative;
    border: 1px solid #999;
    border-radius: 5px;
    box-shadow: 10px 10px 18px -10px rgba(0,0,0,0.75);
    padding-bottom: 10px;
    h3 {
        margin: 5px;
        font-size: 14px;
    }
    p {
        margin: 5px;
        font-size: 10px;
    }
`;

const StyledNameSection = styled.div`
    margin-top: 5px;
    border: 1px solid #999; 
    border-right: none;
    width: 60%;
    position: absolute;
    top: 5px;
    right: 0;
`;

const StyledRequirementsSection = styled.div`
    background-color: #bbb;
    width: 40%;
`;

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
        HabitatWetlands: habitatWater
    } = bird;

    const habitats = mapHabitats(habitatForest, habitatField, habitatWater);

    return (
        <StyledBirdCard>
            <StyledNameSection>
                <h3>{name}</h3>
                <p>{latinName}</p>
            </StyledNameSection>
            <StyledRequirementsSection>
                <RequiredHabitats habitats={habitats} />
            </StyledRequirementsSection>
        </StyledBirdCard>
    )
};