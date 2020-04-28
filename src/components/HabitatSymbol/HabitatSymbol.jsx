import React from "react";
import {StyledBack, StyledHabitatSymbol, StyledIcon} from "./HabitatSymbol.style";
import {faTree, faSeedling, faWater} from "@fortawesome/free-solid-svg-icons";
import {habitatTypes} from "../../habitatTypes";

const getIconForHabitat = (type) => {
    switch (type) {
        case habitatTypes.FOREST:
            return faTree;
        case habitatTypes.FIELD:
            return faSeedling;
        case  habitatTypes.WATER:
            return faWater;
    }
};

export const HabitatSymbol = ({type, size}) => {
    const icon = getIconForHabitat(type);
    return (
        <StyledHabitatSymbol>
            <StyledBack type={type} size={size}/>
            <StyledIcon icon={icon} size={size}/>
        </StyledHabitatSymbol>
    )
};