import React from "react";
import StyledHabitatInfo from "./HabitatInfo.style";
import HabitatSymbol from "../../../HabitatSymbol";

export const HabitatInfo = ({ habitatType }) => {
    return (
        <StyledHabitatInfo>
            <HabitatSymbol habitatType={habitatType} />
        </StyledHabitatInfo>
    )
};