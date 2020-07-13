import React from 'react';
import H1 from '../H1.js';

export default {
  title: 'Titles',
  component: H1,
  parameters: {
    notes: 'Code example with vailable props:' +
    '```<H1 yellow>Main title</H1>```',
  },
};

export const MainTitle = () => <H1>Main title</H1>;
export const YellowTitle = () => <H1 yellow>Main title</H1>;
