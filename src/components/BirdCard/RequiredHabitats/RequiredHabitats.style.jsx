import styled from "styled-components";
import {habitatColors} from "../../../colors";

const StyledRequiredHabitatsWrapper = styled.div`
    padding: 4px 2px;
    display: flex;
`;

const StyledRequiredHabitat = styled.div`
    background: ${props => habitatColors[props.habitatType]};
    flex-basis: 33%;
    flex-shrink: 0;
    height: 10px;
`;


export {
    StyledRequiredHabitatsWrapper,
    StyledRequiredHabitat
};