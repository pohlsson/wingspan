import React from "react";
import styled from 'styled-components';
import {foodTypes} from "../../../types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const mapFoodTypeToIcon = foodType => {
    switch (foodType) {
        case foodTypes.FISH:
            return "fish";
        case foodTypes.FRUIT:
            return "apple-alt";
        case foodTypes.INSECT:
            return "bug";
        case foodTypes.RODENT:
            return "squirrel";
        case foodTypes.SEED:
            return "wheat";
        case foodTypes.WILD:
            return "wild";
        case foodTypes.NONE:
            return "none";
    }
};

const getIconsToRender = food => {
    let icons = [];
    Object.keys(food).map(foodType => {
        const requiredAmount = parseInt(food[foodType], 10);
        for(let i = 0; i< requiredAmount; i +=1) {
            icons.push(mapFoodTypeToIcon(foodType));
        }
    });
    return icons;
};

const StyledRequiredFoodWrapper = styled.div`
    display: flex;
`;

const StyledFoodIconWrapper = styled.div`
    
`;

export const RequiredFood = ({food}) => {
    const icons = getIconsToRender(food);
    return (
        <StyledRequiredFoodWrapper>
            {icons.map((icon, index) => {
                return (
                    <StyledFoodIconWrapper>
                        <FontAwesomeIcon icon={['fal', icon]} size="xs"/>
                        {index !== icons.length - 1 && "+"}
                    </StyledFoodIconWrapper>
                )
            })}
        </StyledRequiredFoodWrapper>
    )
};