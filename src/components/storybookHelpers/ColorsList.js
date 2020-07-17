import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(100px, 1fr));
  font-size: 14px;
  text-align: center;
  padding: 20px;
`;

const BackgroundBlock = styled.div`
  height: 20px;
`;

class AllColors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: {
        yellow: '#FDD87C',
        lightBlack: '#2F2F2F',
        dirtyWhite: '#F9F7F5',
      },
    }
  }
  render() {
    return (
      <Wrapper>
        { Object.entries(this.state.colors).map((key,value) => <div key={value}>
          <BackgroundBlock style={{backgroundColor: key[1]}} />
          <p>{key[0]}</p>
          <p>{key[1]}</p>
        </div>) }
      </Wrapper>
    )
  }
};

export default AllColors;
