import React, { Component } from 'react';
import styled from 'styled-components';
import BaseButton from './BaseButton.js';
import BaseInput from "./BaseInput";
import ButtonWithIcon from './ButtonWithIcon';

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
        <br />
        <ButtonWithIcon>Button with icon</ButtonWithIcon>
      </Wrapper>
  )
  }
};

export default FirstPage;
