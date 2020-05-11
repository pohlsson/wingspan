import React from "react";
import { StyledIconWrapper } from "./HabitatSymbol.style";
import { habitatTypes } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getIconForHabitat = (type) => {
    switch (type) {
        case habitatTypes.FOREST:
            return 'trees';
        case habitatTypes.FIELD:
            return 'seedling';
        case  habitatTypes.WATER:
            return 'water';
    }
};

export const HabitatSymbol = ({habitatType, size = 4}) => {
    const icon = getIconForHabitat(habitatType);
    return (
        <StyledIconWrapper habitatType={habitatType} size={size}>
            <FontAwesomeIcon icon={['fas', icon]} />
        </StyledIconWrapper>
    )
};