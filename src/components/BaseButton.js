import styled from 'styled-components';
import { space } from 'styled-system'

const BaseButton = styled.button`
  color: var(--lightBlack);
  border: ${props => props.yellow ? 'none' : '1px solid var(--lightBlack)' };
  background-color: ${props => props.yellow ? "var(--yellow)" : "transparent"};
  height: ${props => props.high ? "50px" : "37px"} ;
  border-radius: ${props => props.square ? "0px" : "4px"};
  font-weight: 600;
  padding: 0 15px;
  transition: opacity 0.2s;
  ${space};
  
  &:hover {
    opacity: 0.8;
  }
`;

export default BaseButton;