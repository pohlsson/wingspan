import React from "react";
import {StyledBack, StyledHabitatSymbol, StyledIcon} from "./HabitatSymbol.style";
import {habitatTypes} from "../../types";

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

export const HabitatSymbol = ({type, size}) => {
    const icon = getIconForHabitat(type);
    return (
        <StyledHabitatSymbol>
            <StyledBack type={type} size={size}/>
            <StyledIcon icon={['fas', icon]} size={size}/>
        </StyledHabitatSymbol>
    )
};