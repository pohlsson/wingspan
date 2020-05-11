import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {openHand} from "../../../../actions/birds";

export const PlayBirdButton = ({habitat}) => {
    const actionsLeft = useSelector(state => state.player.actionsLeft);
    const dispatch = useDispatch();

    const payload = {
        newBirdData: {
            habitat
        }
    };

    return (
        <button onClick={() => dispatch(openHand(payload))}>
            {actionsLeft}
        </button>
    )
};