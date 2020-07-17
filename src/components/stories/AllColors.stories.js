import React from 'react';
import ColorsList from '../storybookHelpers/ColorsList';

export default {
  title: 'General|All',
  component: ColorsList,
  parameters: {
    notes: 'You could add some documentation here!',
  },
};

export const AllColors = () => <div>
  <ColorsList />
</div>;
