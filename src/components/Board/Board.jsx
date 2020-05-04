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
            <Habitat habitatType={habitatTypes.FOREST}/>
            <Habitat habitatType={habitatTypes.FIELD}/>
            <Habitat habitatType={habitatTypes.WATER} />
        </StyledBoard>
    )
};