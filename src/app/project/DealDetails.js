import React, { Component } from 'react';
import { Grid, Form, Select, TextArea, Input, Radio } from 'semantic-ui-react';
import Countries from './Countries';

const options = [
  { key: '1', value: 'Buy', text: 'Buy' },
  { key: '2', value: 'Sell', text: 'Sell' },
  { key: '3', value: 'Advisory', text: 'Advisory' }
];

export default class DealDetails extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });
  render() {
    const { roles, currency } = this.props;
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
            <Grid.Row>
              <Grid.Column width="3">Deal Region</Grid.Column>
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
            <Grid.Row>
              <Grid.Column width="3">Deal Type</Grid.Column>
              <Grid.Column width="6">
                <Form.Field control={Select} options={options} />
              </Grid.Column>
            </Grid.Row>
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
            <Grid.Row>
              <Grid.Column width="3">CS Role</Grid.Column>
              <Grid.Column width="6">
                <Form.Field control={Select} placeholder="Select a role" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </div>
    );
  }
}
