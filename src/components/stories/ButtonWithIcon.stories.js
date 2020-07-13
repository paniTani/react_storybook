import React from 'react';
import { action } from '@storybook/addon-actions';
import ButtonWithIcon from '../ButtonWithIcon.js';
import '../../index.css';

export default {
  title: 'Base|Buttons/Inherited',
  component: ButtonWithIcon,
  parameters: {
    notes: 'You could add some documentation here!',
  },
};

export const BtnWithIcon = () => <ButtonWithIcon onClick={action('clicked')}>With icon</ButtonWithIcon>;
