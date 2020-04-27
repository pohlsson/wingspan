import styled from 'styled-components';
import React from "react";
import backgroundImage from './images/backgroundImage.jpg';
import Habitat, { habitatTypes } from "./Habitat";

const StyledBoard = styled.div`
    height: ${window.innerHeight}px;
    background: url(${backgroundImage});
    background-size: cover;
`;

export const Board = () => {
    return (
        <StyledBoard>
            <Habitat type={habitatTypes.FOREST}/>
            <Habitat type={habitatTypes.FIELD}/>
            <Habitat type={habitatTypes.WATER} />
        </StyledBoard>
    )
};