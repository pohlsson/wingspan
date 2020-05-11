import React from "react";
import StyledBirdSlot from "./BirdSlot.style";
import {BirdCard} from "../../../BirdCard/BirdCard";

export const BirdSlot = ({birdId}) => {
    return (
        <StyledBirdSlot>
            {birdId && <BirdCard birdId={birdId}/>}
        </StyledBirdSlot>
    )
};