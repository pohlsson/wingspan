import React from "react";
import BirdSlot  from "./BirdSlot";
import StyledHabitat from "./Habitat.style";
import HabitatInfo  from "./HabitatInfo";
import PlayBirdButton from "./PlayBirdButton";
import {useSelector} from "react-redux";

export const Habitat = ({ habitatType }) => {
    const NUMBER_OF_BIRDS_SLOTS = 5;

    let birdSlots = [];
    const birdsInHabitat = useSelector(state => state.player.birdsPlayed[habitatType]);

    const createBirdSlots = () => {
        for(let i = 0; i < NUMBER_OF_BIRDS_SLOTS; i += 1) {
            birdSlots.push(<BirdSlot birdId={birdsInHabitat[i]}/>)
        }
    };

    createBirdSlots();

    return (
        <StyledHabitat>
            <HabitatInfo habitatType={habitatType}/>
            {birdSlots.map(birdSlot => birdSlot)}
            <PlayBirdButton habitat={habitatType} />
        </StyledHabitat>
    )
};