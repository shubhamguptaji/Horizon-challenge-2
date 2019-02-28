import React, { Component } from 'react';
import { Grid, Form, TextArea } from 'semantic-ui-react';
import { Select } from 'antd';

export default class KYCDetails extends Component {
  render() {
    return (
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column width="3">Client ID/KYC Status</Grid.Column>
          <Grid.Column width="6">
            <Form.Field
              control={Select}
              placeholder="Select status..."
              style={{ width: '100%' }}
            >
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="On Hold">On Hold</option>
              <option value="Complete">Complete</option>
            </Form.Field>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="3">Client ID/KYC Status Comment</Grid.Column>
          <Grid.Column width="6">
            <Form.Field
              control={TextArea}
              placeholder="Add a comment about KYC status for this project..."
              limit="500"
              style={{ width: '100%' }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
