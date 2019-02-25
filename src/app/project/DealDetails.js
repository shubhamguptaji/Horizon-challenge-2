import React, { Component } from 'react';
import { Grid, Form, Select, TextArea, Input } from 'semantic-ui-react';

export default class DealDetails extends Component {
  render() {
    const { primaryCountry, secondaryCountry, roles, currency } = this.props;
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
            <Grid.Row>
              <Grid.Column width="2">Primary Country</Grid.Column>
              <Grid.Column width="1" />
              <Grid.Column width="6">
                <Form.Field
                  control={Select}
                  placeholder="Select a country"
                  options={primaryCountry}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="2">Secondary Country</Grid.Column>
              <Grid.Column width="1" />
              <Grid.Column width="6">
                <Form.Field
                  control={Select}
                  placeholder="Select a country"
                  options={secondaryCountry}
                />
              </Grid.Column>
              <Grid.Column width="1" style={{ marginTop: 5 }}>
                OPTIONAL
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ marginTop: -15 }}>
              <Grid.Column width="3" />
              <Grid.Column width="6">+ ADD ANOTHER COUNTRY</Grid.Column>
            </Grid.Row>
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
        </Form>
      </div>
    );
  }
}
