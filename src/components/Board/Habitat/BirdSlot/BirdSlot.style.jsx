import styled from 'styled-components';

const StyledBirdSlot = styled.div`
    flex-basis: calc(100% / 5);
    height: 300px;
    margin: 10px;
    border: 1px solid #eee;
    border-radius: 3px;
    
    &:hover {
        background-color: rgba(0,0,0,0.1);
        cursor: pointer;
    }
`;

export default StyledBirdSlot;