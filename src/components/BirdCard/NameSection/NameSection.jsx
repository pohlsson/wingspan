import React from "react";
import { StyledNameSection } from "./NameSection.style";

export const NameSection = ({name, latinName}) => {
    return (
        <StyledNameSection>
            <h3>{name}</h3>
            <p>{latinName}</p>
        </StyledNameSection>
    )
};