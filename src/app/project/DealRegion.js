import React, { Component } from 'react';
import { Grid, Radio, Form } from 'semantic-ui-react';

export default class DealRegion extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column width="1" />
          <Grid.Column width="2">Deal Region</Grid.Column>
          <Grid.Column width="6">
            <Form.Group inline>
              <Form.Field
                control={Radio}
                label="Yes"
                value="Yes"
                checked={value === 'Yes'}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label="No"
                value="No"
                checked={value === 'No'}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label="Unknown"
                value="Unknown"
                checked={value === 'Unknown'}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
