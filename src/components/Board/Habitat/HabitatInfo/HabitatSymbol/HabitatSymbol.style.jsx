import styled from "styled-components";
import { habitatTypes } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledHabitatSymbol = styled.div`
    transform: rotate(45deg);
    height: 75px;
    width: 75px;
    position: relative;
    border-radius: 3px;
    margin: 10px;
    box-shadow: -47px 56px 119px -38px rgba(0,0,0,0.96);
    background: ${props => {
        switch (props.type) {
            case habitatTypes.FOREST:
                return '#576b57';
            case habitatTypes.FIELD:
                return '#F0E68C';
            case habitatTypes.WATER:
                return '#0D4F8B';
            default:
                return ""
        }
    }};
`;

const StyledIcon = styled(FontAwesomeIcon)`
    transform: rotate(-45deg);
    font-size: 50px;
    color: #fff;
    padding-top: 17px;
    padding-left: 12px;
`;

export {
    StyledHabitatSymbol,
    StyledIcon
};