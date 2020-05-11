import styled from "styled-components";
import {habitatColors} from "../../colors";

const StyledIconWrapper = styled.div`
    color: #fff;
    transform: rotate(45deg);
    height: ${props => props.size}em;
    width: ${props => props.size}em;
    background: ${props => habitatColors[props.habitatType]};
    
    svg {
        transform: rotate(-45deg);
        min-height: ${props => props.size * 0.7}em;
        min-width: ${props => props.size * 0.7}em;
        margin-top: ${props => props.size * 0.15}em;
        margin-left: ${props => props.size * 0.15}em;
    }
`;

export {
    StyledIconWrapper
};