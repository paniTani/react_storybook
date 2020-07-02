import React, { Component } from 'react';
import styled from 'styled-components';
import BaseButton from './BaseButton.js';
import BaseInput from "./BaseInput";

const Wrapper = styled.div`
    padding: 30px;
`;


class FirstPage extends Component {
  render() {
    return (
      <Wrapper>
        <BaseButton yellow>Base Yellow Button</BaseButton>
        <BaseButton ml="15px">Base Button</BaseButton>
        <br />
        <BaseInput mt="20px" />
      </Wrapper>
  )
  }
};

export default FirstPage;
