import React from "react";
import { BirdSlot } from "./BirdSlot/BirdSlot";
import StyledHabitat from "./Habitat.style";
import { HabitatInfo } from "./HabitatInfo/HabitatInfo";

export const Habitat = ({ type }) => {

    const birdSlots = [
        <BirdSlot/>,
        <BirdSlot/>,
        <BirdSlot/>,
        <BirdSlot/>,
        <BirdSlot/>
    ];

    return (
        <StyledHabitat>
            <HabitatInfo type={type}/>
            {birdSlots.map(birdSlot => birdSlot)}
        </StyledHabitat>
    )
};