import React from "react";
import StyledBirdSlot from "./BirdSlot.style";
import {BirdCard} from "../../../BirdCard/BirdCard";
import birds from "../../../../birds";

export const BirdSlot = ({birdId}) => {
    return (
        <StyledBirdSlot>
            {birdId && <BirdCard bird={birds[birdId]}/>}
        </StyledBirdSlot>
    )
};