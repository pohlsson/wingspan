import {StyledBirdCardSelector} from "./BirdCardSelector.style";
import React from "react";
import BirdCard from "../../BirdCard";
import {useDispatch, useSelector} from "react-redux";
import {selectAllowedHabitatsById} from "../../../reducers/birds/selectors";
import {playBird} from "../../../actions/birds";

export const BirdCardSelector = ({birdId, onPlayBirdCard}) => {
    const dispatch = useDispatch();
    const newBirdData = useSelector(state => state.player.newBirdData);
    const allowedHabitats = useSelector(state => selectAllowedHabitatsById(state.birds, birdId));
    const isPlayingBirdCard = !!newBirdData;

    const birdIsPlayable = allowedHabitats[newBirdData.habitat];

    const playBirdCard = () => {
        if(isPlayingBirdCard && birdIsPlayable) {
            dispatch(playBird({
                habitat: newBirdData.habitat,
                birdId
            }));
            onPlayBirdCard();
        }
    };

    return (
        <StyledBirdCardSelector onClick={playBirdCard} playable={birdIsPlayable}>
            <BirdCard birdId={birdId} />
        </StyledBirdCardSelector>
    )
};