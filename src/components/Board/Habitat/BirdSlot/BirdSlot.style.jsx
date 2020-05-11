import styled from 'styled-components';

const StyledBirdSlot = styled.div`
    flex-basis: ${((window.innerHeight / 3) - 40)  / 1.3}px;
    height: ${(window.innerHeight / 3) - 40}px;
    flex-shrink: 0;
    flex-grow: 0;
    margin: 10px;
    border: 1px solid #eee;
    border-radius: 5px;
    
    &:hover {
        background-color: rgba(0,0,0,0.1);
        cursor: pointer;
    }
`;

export default StyledBirdSlot;