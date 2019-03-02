import React, { Component } from 'react';
import { Grid, Form, Radio } from 'semantic-ui-react';

export default class ProductType extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column width="3">Product Type</Grid.Column>
          <Grid.Column width="6">
            <Form.Group inline>
              <Form.Field
                control={Radio}
                label="Leveraged"
                value="Leveraged"
                checked={value === 'Leveraged'}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label="Non-Leveraged"
                value="Non-Leveraged"
                checked={value === 'Non-Leveraged'}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
