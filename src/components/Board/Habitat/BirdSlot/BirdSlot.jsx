import React from "react";
import StyledBirdSlot from "./BirdSlot.style";
import {BirdCard} from "../../../BirdCard/BirdCard";
import birds from "../../../../birds";

export const BirdSlot = () => {
    return (
        <StyledBirdSlot>
            <BirdCard bird={birds[4]}/>
        </StyledBirdSlot>
    )
};