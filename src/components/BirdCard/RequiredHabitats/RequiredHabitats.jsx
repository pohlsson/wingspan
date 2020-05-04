import React from "react";
import HabitatSymbol from "../../HabitatSymbol";
import {
    StyledRequiredHabitat,
    StyledRequiredHabitatsWrapper,
    StyledThirdRequiredHabitat
} from "./RequiredHabitats.style";

const renderHabitatSymbols = habitats => (
    habitats.map((habitatType, index) => {
        if (index === 0) {
            return (<StyledThirdRequiredHabitat>
                <HabitatSymbol className="test" habitatType={habitatType} size={2}/>
            </StyledThirdRequiredHabitat>)
        }
        return (
            <StyledRequiredHabitat>
                <HabitatSymbol className="test" habitatType={habitatType} size={2} />
            </StyledRequiredHabitat>
        )
    })
);

export const RequiredHabitats = ({habitats}) => {
    return (
        <StyledRequiredHabitatsWrapper>
            {renderHabitatSymbols(habitats)}
        </StyledRequiredHabitatsWrapper>
    )
};