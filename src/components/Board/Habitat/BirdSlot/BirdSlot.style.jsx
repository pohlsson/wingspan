import styled from 'styled-components';

const StyledBirdSlot = styled.div`
    flex-basis: 18em;
    height: 25em;
    flex-shrink: 0;
    margin: 10px;
    border: 1px solid #eee;
    border-radius: 5px;
    
    &:hover {
        background-color: rgba(0,0,0,0.1);
        cursor: pointer;
    }
`;

export default StyledBirdSlot;