import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {StyledHand, StyledHandWrapper} from "./Hand.style";
import {closeHand} from "../../actions/birds";
import {BirdCardSelector} from "./BirdCardSelector/BirdCardSelector";

export const Hand = () => {
    const dispatch = useDispatch();
    const birdsInHand = useSelector(state => state.player.birdsInHand);

    const close = () => {
        dispatch(closeHand());
    };

    return (
        <StyledHandWrapper>
            <button onClick={close}>X</button>
            <StyledHand>
                {birdsInHand.map(birdId => (
                    <BirdCardSelector
                        key={birdId}
                        birdId={birdId}
                        onPlayBirdCard={close}
                    />
                ))}
            </StyledHand>
        </StyledHandWrapper>
    )
};