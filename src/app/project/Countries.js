import React, { Component } from 'react';
import { Grid, Form, Select, Button } from 'semantic-ui-react';

export default class Countries extends Component {
  state = {
    count: 0,
    disabled: false
  };
  render() {
    const { primaryCountry, secondaryCountry } = this.props;
    return (
      <Grid columns="2">
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
              onChange={() => {
                this.setState({ disabled: false });
              }}
            />
          </Grid.Column>
          <Grid.Column width="1" style={{ marginTop: 5 }}>
            OPTIONAL
          </Grid.Column>
        </Grid.Row>
        {Array.apply(null, { length: this.state.count }).map((e, i) => (
          <Grid.Row key={i}>
            <Grid.Column width="3" />
            <Grid.Column width="6">
              <Form.Field
                control={Select}
                placeholder="Select a country"
                options={secondaryCountry}
                onChange={() => {
                  this.setState({ disabled: false });
                }}
              />
            </Grid.Column>
            <Grid.Column width="1" style={{ marginTop: 5 }}>
              OPTIONAL
            </Grid.Column>
          </Grid.Row>
        ))}
        <Grid.Row style={{ marginTop: -15 }}>
          <Grid.Column width="3" />
          <Grid.Column width="6">
            <Button
              onClick={() => {
                this.setState({ count: this.state.count + 1 });
                this.setState({ disabled: true });
              }}
              disabled={this.state.disabled === true ? true : false}
            >
              + ADD ANOTHER COUNTRY
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
