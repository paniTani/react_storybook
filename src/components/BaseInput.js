import styled from 'styled-components';
import { space } from 'styled-system'
import { Input } from 'antd';

const BaseInput = styled(Input)`
  background-color: var(--dirtyWhite);
  color: var(--lightBlack);
  width: 500px;
  margin: 0 auto;
  font-weight: 500;
  border: 1px solid var(--yellow);
  outline: none;
  transition: all 0.5s;
  ${space};
  
  &:hover {
    border: 1px solid var(--yellow);
  }

  &:focus,
  &:active {
    box-shadow: 0 0 2px 1px var(--yellow);
    border-color: transparent;
  }
`;

export default BaseInput;
