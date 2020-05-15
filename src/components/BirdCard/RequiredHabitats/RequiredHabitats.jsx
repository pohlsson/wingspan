import React from "react";
import {StyledRequiredHabitat, StyledRequiredHabitatsWrapper} from "./RequiredHabitats.style";


export const RequiredHabitats = ({habitats}) => {
    return (
        <StyledRequiredHabitatsWrapper>
            {habitats.map(habitatType => (
                <StyledRequiredHabitat habitatType={habitatType} key={habitatType}/>
            ))}
        </StyledRequiredHabitatsWrapper>
    )
};