import React from 'react';
import H1 from '../H1.js';

export default {
  title: 'Titles',
  component: H1,
  parameters: {
    notes: 'You could add some documentation here!',
  },
};

export const MainTitle = () => <H1>Main title</H1>;
export const YellowTitle = () => <H1 yellow>Main title</H1>;
