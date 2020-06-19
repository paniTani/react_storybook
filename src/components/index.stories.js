import React from 'react';
import BaseButton from './BaseButton.js';

export default { title: 'BaseButton' };

export const withText = props => <BaseButton style={props.yellow}>Hello Button</BaseButton>;

export const withEmoji = () => (
  <BaseButton>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </BaseButton>
);