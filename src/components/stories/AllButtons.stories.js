import React from 'react';
import BaseButton from '../BaseButton.js';
import ButtonWithIcon from '../ButtonWithIcon.js';

export default {
  title: 'General|All',
  component: [BaseButton, ButtonWithIcon],
  decorators: [story => <div style={{ padding: '30px' }}>{story()}</div>],
  parameters: {
    notes: 'You could add some documentation here!',
  },
};

export const AllButtons = () => <div>
  <h3>BaseButton</h3>
  <BaseButton>BaseButton</BaseButton>
  <BaseButton yellow style={{margin: '0 10px'}}>BaseButton Yellow</BaseButton>
  <BaseButton square>BaseButton Square</BaseButton>
  <br />
  <h3>BaseButton with Icon</h3>
  <ButtonWithIcon>Button with Icon</ButtonWithIcon>
</div>;
