import {useDispatch, useSelector} from "react-redux";
import React from "react";

export const PlayBirdButton = ({habitat}) => {
    const actionsLeft = useSelector(state => state.player.actionsLeft);
    const dispatch = useDispatch();
    const action = {
        type: 'PLAY_BIRD',
        payload: {
            habitat,
            birdId:Math.floor(Math.random() * (100 - 1 + 1) + 1)
        }
    };
    return (
        <button onClick={() => dispatch(action)}>
            {actionsLeft}
        </button>
    )
};