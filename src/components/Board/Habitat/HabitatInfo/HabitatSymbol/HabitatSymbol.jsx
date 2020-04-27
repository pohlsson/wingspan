import React from "react";
import { StyledHabitatSymbol, StyledIcon} from "./HabitatSymbol.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";

export const HabitatSymbol = ({type}) => {
    return (
        <StyledHabitatSymbol type={type}>
            <StyledIcon icon={faTree} />
        </StyledHabitatSymbol>
    )
};