import styled from "styled-components";

export const StyledBirdCard = styled.div`
    background-color: #ddd;
    width: ${((window.innerHeight / 3) - 40)  / 1.3}px;
    height: ${(window.innerHeight / 3) - 40}px;
    position: relative;
    border: 1px solid #999;
    border-radius: 5px;
    box-shadow: 10px 10px 18px -10px rgba(0,0,0,0.75);
    
    &:hover {
        transform: scale(1.02, 1.02);
    }
`;

export const StyledRequirementsSection = styled.div`
    background-color: #bbb;
    min-width: 7em;
    max-width: 7em;
`;