import React from 'react';
import { action } from '@storybook/addon-actions';
import BaseButton from '../BaseButton.js';
import '../../index.css';

export default {
  title: 'Base|Buttons/Base',
  component: BaseButton,
  parameters: {
    notes: 'You could add some documentation here!',
  },
};

export const BaseBtn = () => <BaseButton onClick={action('clicked')}>Custom</BaseButton>;
export const BaseYellowButton = () => <BaseButton onClick={action('clicked')} yellow>Custom(yellow)</BaseButton>;
export const SquareButton = () => <BaseButton square>Custom(square)</BaseButton>;
