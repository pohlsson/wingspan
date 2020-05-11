import styled from "styled-components";
import {habitatColors} from "../../../colors";

const StyledRequiredHabitatsWrapper = styled.div`
    display: flex;
    padding-top: 2.5em;
    padding-left: 1em;
    min-height: 2em;
`;

const StyledRequiredHabitat = styled.div`
    margin-right: 1em;
    margin-bottom: 1em;
    background: ${props => habitatColors[props.habitatType]};
`;

const StyledThirdRequiredHabitat = styled.div`
    position: absolute;
    top: 1em;
    left: 2.5em;
`;

export {
    StyledRequiredHabitatsWrapper,
    StyledRequiredHabitat,
    StyledThirdRequiredHabitat
};