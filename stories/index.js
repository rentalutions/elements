import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Dropdown, Button, Field } from '../src'

storiesOf('Dropdown', module)
  .add('basic', () => (
    <Dropdown
      title={(
        <Button>Style</Button>
      )}
      items={[
        <Button onClick={() => console.log('You clicked on the colors')}>Colors</Button>,
        <Button>Typography</Button>,
        <Button>Grid</Button>,
      ]}
    />
  ))

storiesOf('Text Field', module)
  .add('Basic', () => <Field id="1" label="A great label" />)