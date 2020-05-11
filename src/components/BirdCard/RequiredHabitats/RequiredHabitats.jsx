import React from "react";
import {
    StyledRequiredHabitat,
    StyledRequiredHabitatsWrapper,
    StyledThirdRequiredHabitat
} from "./RequiredHabitats.style";

const renderHabitatSymbols = habitats => (
    habitats.map((habitatType, index) => {
        if (index === 0) {
            return <StyledThirdRequiredHabitat habitatType={habitatType}/>
        }
        return <StyledRequiredHabitat habitatType={habitatType}/>
    })
);

export const RequiredHabitats = ({habitats}) => {
    return (
        <StyledRequiredHabitatsWrapper>
            {renderHabitatSymbols(habitats)}
        </StyledRequiredHabitatsWrapper>
    )
};