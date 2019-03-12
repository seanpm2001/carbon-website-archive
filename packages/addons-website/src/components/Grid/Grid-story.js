import { storiesOf } from '@storybook/react';
import React from 'react';
import { Grid, Row, Column } from '../Grid';

storiesOf('Grid', module).add(
  'Grid',
  () => (
    <Grid>
      <Row>
        <Column colLg="4">one</Column>
        <Column colLg="4">two</Column>
        <Column colLg="4" offsetLg="4">
          three (offset)
        </Column>
      </Row>
    </Grid>
  ),
  {
    info: {
      text: 'Grid',
    },
  }
);
