import React from "react";
import BirdSlot  from "./BirdSlot";
import StyledHabitat from "./Habitat.style";
import HabitatInfo  from "./HabitatInfo";
import PlayBirdButton from "./PlayBirdButton";
import {useSelector} from "react-redux";



export const Habitat = ({ type }) => {
    const NUMBER_OF_BIRDS_SLOTS = 5;

    let birdSlots = [];
    const birdsInHabitat = useSelector(state => state.player.birdsPlayed[type]);

    const createBirdSlots = () => {
        for(let i = 0; i < NUMBER_OF_BIRDS_SLOTS; i += 1) {
            birdSlots.push(<BirdSlot birdId={birdsInHabitat[i]}/>)
        }
    };

    createBirdSlots();

    return (
        <StyledHabitat>
            <HabitatInfo type={type}/>
            {birdSlots.map(birdSlot => birdSlot)}
            <PlayBirdButton habitat={type} />
        </StyledHabitat>
    )
};