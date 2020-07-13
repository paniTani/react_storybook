import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 30px;
  color: ${props => props.yellow ? "var(--yellow)" : "var(--lightBlack)"};
  
  @media (min-width: 768px) {
    font-size: 46px;
  }
`;

export default H1;
