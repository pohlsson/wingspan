import React, {useEffect} from 'react';
import Board from "./Board";
import Hand from "./Hand";
import {useDispatch, useSelector} from "react-redux";
import {selectRandomBirds} from "../reducers/birds/selectors";
import {GlobalStyle} from "./App.style";
import {drawBird} from "../actions/birds";

const App = () => {
    const START_NR_OF_BIRDS = 5;
    const dispatch = useDispatch();
    const playerState = useSelector(state => state.player);
    const birdState = useSelector(state => state.birds);

    useEffect(() => {
        const birds = selectRandomBirds(birdState, START_NR_OF_BIRDS);
        dispatch(drawBird({
            birds
        }));
    }, []);

    return (
        <div>
            <GlobalStyle />
            <Board/>
            {playerState.isHandOpen && <Hand /> }
        </div>
    );
};

export default App;
