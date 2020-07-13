import React, { Component } from 'react';
import BaseButton from './BaseButton';
import { ReactComponent as SmileSvg }  from '../assets/images/icon-smile.svg';
import styled from 'styled-components';

const ButtonWrapper = styled(BaseButton)`
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonSvg = styled(SmileSvg)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const ButtonText = styled.span`
  display: inline-block;
`;

class ButtonWithIcon extends Component {
  render() {
    return (
      <ButtonWrapper>
        <ButtonSvg />
        <ButtonText>
          { this.props.children }
        </ButtonText>
      </ButtonWrapper>
    )
  }
};

export default ButtonWithIcon;
