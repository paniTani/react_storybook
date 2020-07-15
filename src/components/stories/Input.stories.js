import React from 'react';
import BaseInput from '../BaseInput.js';
import { jsxDecorator } from 'storybook-addon-jsx';

export default {
  title: 'Input',
  decorators: [jsxDecorator],
  component: BaseInput,
};

export const AntInput = () => <BaseInput />;
