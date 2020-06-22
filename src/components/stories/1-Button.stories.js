import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import BaseButton from '../BaseButton.js';

export default {
  title: 'Button',
  component: BaseButton,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Btn = () => <BaseButton onClick={action('clicked')}>BaseButton</BaseButton>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
