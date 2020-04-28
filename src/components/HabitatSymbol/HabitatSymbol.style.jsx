import styled from "styled-components";
import { habitatTypes } from "../../habitatTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledHabitatSymbol = styled.div`
    position: relative;
`;

const StyledBack = styled.div`
    transform: rotate(45deg);
    height: ${props => props.size === 'small' ? 14 : 75}px;
    width: ${props => props.size === 'small' ? 14 : 75}px;
    position: relative;
    border-radius: 3px;
    margin: 4px;
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
    ${props => props.size === 'small' && 'display: none;'}
    font-size: 50px;
    color: #fff;
    position: absolute;
    min-width: 50px;
    min-height: 50px;
    top: 15px;
    left: 15px;
`;

export {
    StyledHabitatSymbol,
    StyledBack,
    StyledIcon
};