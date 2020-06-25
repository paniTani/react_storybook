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
  ${space};
`;

export default BaseInput;
