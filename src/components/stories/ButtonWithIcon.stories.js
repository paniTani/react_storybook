import React from 'react';
import { action } from '@storybook/addon-actions';
import ButtonWithIcon from '../ButtonWithIcon.js';
import { jsxDecorator } from 'storybook-addon-jsx';

export default {
  title: 'Base|Buttons/Inherited',
  component: ButtonWithIcon,
  decorators: [jsxDecorator],
  parameters: {
    notes: 'You could add some documentation here!',
  },
};

export const BtnWithIcon = () => <ButtonWithIcon onClick={action('clicked')}>With icon</ButtonWithIcon>;
