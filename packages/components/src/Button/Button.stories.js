import React from 'react';

// import { action } from '@storybook/addon-actions';

import Button from './Button';

export default {
  title: 'Button',
};

export const Text = () => {
  return (
    <div>
      <Button variant="text" primary>Default</Button>
      <br />
      <br />
      <Button variant="text">Secondary</Button>
    </div>
  )
}


export const Contained = () => {
  return (
    <div>
      <Button variant="contained" primary>Default</Button>
      <br />
      <br />
      <Button variant="contained">Secondary</Button>
    </div>
  )
}
