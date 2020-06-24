import React from 'react';
import { action } from '@storybook/addon-actions';
import BaseButton from '../BaseButton.js';
import '../../index.css';

export default {
  title: 'Button',
  component: BaseButton,
};

export const BaseBtn = () => <BaseButton onClick={action('clicked')}>Custom</BaseButton>;
export const BaseYellowButton = () => <BaseButton onClick={action('clicked')} yellow>Custom(yellow)</BaseButton>;
