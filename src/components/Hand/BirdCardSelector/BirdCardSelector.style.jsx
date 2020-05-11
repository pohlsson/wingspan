import styled from "styled-components";

export const StyledBirdCardSelector = styled.div`
    margin: 10px;
    cursor: pointer;
    ${props => !props.playable && 'opacity: 0.2;'}
`;