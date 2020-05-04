import styled from "styled-components";
import { habitatTypes } from "../../types";

const StyledIconWrapper = styled.div`
    color: #fff;
    transform: rotate(45deg);
    height: ${props => props.size}em;
    width: ${props => props.size}em;
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