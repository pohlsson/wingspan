import {habitatTypes} from "../../../types";
import React, {useEffect} from "react";
import {HabitatSymbol} from "../../HabitatSymbol/HabitatSymbol";
import {
    StyledRequiredHabitatsWrapper,
    StyledRequiredHabitat,
    StyledThirdRequiredHabitat
} from "./RequiredHabitats.style";

const renderHabitatSymbols = habitats => (
    habitats.map((habitatType, index) => {
        if (index === 0) {
            return (<StyledThirdRequiredHabitat>
                <HabitatSymbol className="test" type={habitatType} size="small"/>
            </StyledThirdRequiredHabitat>)
        }
        return (
            <StyledRequiredHabitat>
                <HabitatSymbol className="test" type={habitatType} size="small"/>
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