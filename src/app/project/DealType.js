import React, { Component } from 'react';
import { Grid, Form, Select } from 'semantic-ui-react';

const options = [
  { key: '1', value: 'Buy', text: 'Buy' },
  { key: '2', value: 'Sell', text: 'Sell' },
  { key: '3', value: 'Advisory', text: 'Advisory' }
];

export default class DealType extends Component {
  render() {
    return (
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column width="1" />
          <Grid.Column width="2">Deal Type</Grid.Column>
          <Grid.Column width="6">
            <Form.Field control={Select} options={options} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
