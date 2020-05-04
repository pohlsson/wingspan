import styled from "styled-components";
import { habitatTypes } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledHabitatSymbol = styled.div`
    position: relative;
`;

const StyledBack = styled.div`
    transform: rotate(45deg);
    height: ${props => props.size === 'small' ? 20 : 75}px;
    width: ${props => props.size === 'small' ? 20 : 75}px;
    position: relative;
    border-radius: 3px;
    margin: 6px;
    box-shadow: -47px 56px 119px -38px rgba(0,0,0,0.96);
    background: ${props => {
    switch (props.type) {
        case habitatTypes.FOREST:
            return '#576b57';
        case habitatTypes.FIELD:
            return '#F0E68C';
        case habitatTypes.WATER:
            return '#0D4F8B';
        }
    }};
`;

const StyledIcon = styled(FontAwesomeIcon)`
    position: absolute;
    top: ${props => props.size === 'small' ? 3 : 16}px;
    left: ${props => props.size === 'small' ? 9 : 19}px;
    max-height: ${props => props.size === 'small' ? 14 : 50}px;
    max-width: ${props => props.size === 'small' ? 14 : 50}px;
    font-size: 50px;
    color: #fff;
`;

export {
    StyledHabitatSymbol,
    StyledBack,
    StyledIcon
};