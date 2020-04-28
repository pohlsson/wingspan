import {habitatTypes} from "../../../habitatTypes";
import React, {useEffect} from "react";
import {HabitatSymbol} from "../../HabitatSymbol/HabitatSymbol";
import {StyledRequiredHabitats, StyledThirdHabitat} from "./RequiredHabitats.style";

export const RequiredHabitats = ({habitats}) => {
    return (
        <StyledRequiredHabitats>
            {habitats.map((habitatType, index) => {
                if (index === 2) {
                    return (
                        <StyledThirdHabitat>
                            <HabitatSymbol type={habitatType} size="small"/>
                        </StyledThirdHabitat>
                    )
                }
                return <HabitatSymbol type={habitatType} size="small"/>
            })}
        </StyledRequiredHabitats>
    )
};