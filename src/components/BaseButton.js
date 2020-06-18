import styled from 'styled-components';

const BaseButton = styled.button`
  color: var(--lightBlack);
  border: ${props => props.yellow ? 'none' : '1px solid var(--lightBlack)' };
  background-color: ${props => props.yellow ? "var(--yellow)" : "transparent"};
  height: ${props => props.high ? "50px" : "37px"} ;
  border-radius: 4px;
  font-weight: 600;
  padding: 0 15px;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
`;

export default BaseButton;