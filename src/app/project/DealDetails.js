import React, { Component } from 'react';
import { Grid, Form, Radio } from 'semantic-ui-react';
import Countries from './Countries';
import DealRolesAndDescription from './DealRolesAndDescription';
import DealRegion from './DealRegion';
import DealType from './DealType';
import ProductType from './ProductType';
import CSRole from './CSRole';

export default class DealDetails extends Component {
  state = {
    disabled: false
  };

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <div>
        <Form>
          <Grid columns="2">
            <Grid.Row>
              <Grid.Column width="9">
                Please select the countries involved in the execution of the
                transaction (i.e. which CS legal entity will execute the deal?
                Are these bankers based in other countries?)
              </Grid.Column>
              <Grid.Column />
            </Grid.Row>
          </Grid>
          <Countries />
          <DealRolesAndDescription />
          <DealRegion />
          <DealType />
          <ProductType />
          <Grid columns="2">
            <Grid.Row>
              <Grid.Column width="3">Financing Purpose</Grid.Column>
              <Grid.Column width="6">
                <Form.Group inline>
                  <Form.Field
                    control={Radio}
                    label="M&A related"
                    value="M&A related"
                    checked={value === 'M&A related'}
                    onChange={this.handleChange}
                  />
                  <Form.Field
                    control={Radio}
                    label="Non-M&A related"
                    value="Non-M&A related"
                    checked={value === 'Non-M&A related'}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3">Hostile/Unsolicited</Grid.Column>
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
                </Form.Group>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3">Special Committee</Grid.Column>
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
                </Form.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <CSRole />
        </Form>
      </div>
    );
  }
}
