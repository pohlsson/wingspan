import React from "react";
import StyledHabitatInfo from "./HabitatInfo.style";
import HabitatSymbol from "../../../HabitatSymbol";

export const HabitatInfo = ({ type }) => {
    return (
        <StyledHabitatInfo>
            <HabitatSymbol type={type} />
        </StyledHabitatInfo>
    )
};