import React from 'react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import BaseButton from '../BaseButton.js';
import '../../index.css';

export default {
  title: 'Button',
  component: BaseButton,
  decorators: [withInfo],
  parameters: {
    info: {
      text: ` description or documentation about my component, supports markdown

    ~~~js
    <Button>Click Here</Button>
    ~~~
  `,
    },
  },
};

export const BaseBtn = () => <BaseButton onClick={action('clicked')}>Custom</BaseButton>;
export const BaseYellowButton = () => <BaseButton onClick={action('clicked')} yellow>Custom(yellow)</BaseButton>;
export const SquareButton = () => <BaseButton square>Custom(square)</BaseButton>;
