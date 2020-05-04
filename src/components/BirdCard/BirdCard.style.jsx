import styled from "styled-components";

export const StyledBirdCard = styled.div`
    background-color: #ddd;
    height: 100%;
    position: relative;
    border: 1px solid #999;
    border-radius: 5px;
    box-shadow: 10px 10px 18px -10px rgba(0,0,0,0.75);
    h3 {
        margin: 5px;
        font-size: 10px;
    }
    p {
        margin: 5px;
        font-size: 9px;
    }
    &:hover {
        transform: scale(1.1, 1.1);
    }
`;

export const StyledNameSection = styled.div`
    margin-top: 5px;
    border: 1px solid #999; 
    border-right: none;
    min-width: 60%;
    max-width:  60%;
    position: absolute;
    top: 5px;
    right: 0;
`;

export const StyledRequirementsSection = styled.div`
    background-color: #bbb;
    min-width: 40%;
    max-width:  40%;
`;