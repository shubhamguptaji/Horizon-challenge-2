import React, { Component } from 'react';
import { Grid, Form, Input, TextArea, Select } from 'semantic-ui-react';

export default class DealRolesAndDescription extends Component {
  render() {
    const { roles, currency } = this.props;
    return (
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column width="2">CS ROLE</Grid.Column>
          <Grid.Column width="1" />
          <Grid.Column width="6">
            <Form.Field
              placeholder="Select a role..."
              options={roles}
              control={Select}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="3">Transaction Description</Grid.Column>
          <Grid.Column width="6">
            <Form.Field control={TextArea} placeholder="" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="3">Deal Currency & Size</Grid.Column>
          <Grid.Column width="6">
            <Form.Field control={Select} options={currency} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="3" />
          <Grid.Column width="6">
            <Form.Field control={Input} placeholder="0" />
          </Grid.Column>
          <Grid.Column width="1" style={{ marginTop: 5 }}>
            Million
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="3">Estimated Closing Date</Grid.Column>
          <Grid.Column width="6">
            <Form.Field control={Input} placeholder="Select a Date" />
          </Grid.Column>
          <Grid.Column width="1" style={{ marginTop: 5 }}>
            OPTIONAL
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
