import player from './player/player';
import birds from './birds/birds';
import {combineReducers} from "redux";

export default combineReducers({
    player,
    birds
});