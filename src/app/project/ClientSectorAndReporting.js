import React, { Component } from 'react';
import { Grid, Form, Select, Button, Icon } from 'semantic-ui-react';

export default class ClientSectorAndReporting extends Component {
  state = {
    value: 100,
    count: 0,
    sum: 0,
    count1: 0,
    value1: 100
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  };

  handleChange1 = e => {
    e.preventDefault();
    this.setState({ value1: e.target.value });
  };

  render() {
    return (
      <div>
        <Grid columns="2">
          <Grid.Row>
            <Grid.Column width="1" />
            <Grid.Column width="2">Client Sector</Grid.Column>
            <Grid.Column width="6">
              <Form.Field
                control={Select}
                style={{ width: '100%' }}
                placeholder="UNCOVERED"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="1" />
            <Grid.Column width="2">CS Reporting Sector</Grid.Column>
            <Grid.Column width="6">
              <Form.Field
                control={Select}
                placeholder="UNCOVERED"
                style={{ width: '100%' }}
              />
            </Grid.Column>
            <Grid.Column width="1" />
            <Grid.Column width="1">
              <Form>
                <Form.Field>
                  <input
                    max="100"
                    type="number"
                    min="1"
                    onChange={this.handleChange}
                    value={this.state.value}
                  />
                </Form.Field>
              </Form>
            </Grid.Column>
            <Grid.Column width="1" style={{ marginTop: '12px' }}>
              % split
            </Grid.Column>
          </Grid.Row>
          {Array.apply(null, { length: this.state.count }).map((e, i) => (
            <Grid.Row key={i}>
              <Grid.Column width="3" />
              <Grid.Column width="6">
                <Form.Field
                  control={Select}
                  placeholder="UNCOVERED"
                  style={{ width: '100%' }}
                />
              </Grid.Column>
              <Grid.Column width="1" />
              <Grid.Column width="1">
                <Form>
                  <Form.Field>
                    <input
                      max="100"
                      type="number"
                      style={{ width: '100%' }}
                      min="1"
                      onChange={this.handleChange}
                      value={100 - this.state.value}
                    />
                  </Form.Field>
                </Form>
              </Grid.Column>
              <Grid.Column width="1" style={{ marginTop: '12px' }}>
                % split
              </Grid.Column>
              <Grid.Column width="1">
                <Icon
                  name="close"
                  onClick={() => {
                    this.setState({ count: this.state.count - 1 });
                  }}
                />
              </Grid.Column>
            </Grid.Row>
          ))}
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="6">
              <Button
                onClick={() => {
                  this.setState({ count: this.state.count + 1 });
                }}
              >
                + ADD ANOTHER REPORTING SECTOR
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="1" />
            <Grid.Column width="2">Client Location</Grid.Column>
            <Grid.Column width="6">
              <Form.Field
                control={Select}
                style={{ width: '100%' }}
                placeholder="USA (America)"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="1" />
            <Grid.Column width="2">CS Reporting Location</Grid.Column>
            <Grid.Column width="6">
              <Form.Field
                control={Select}
                placeholder="USA"
                style={{ width: '100%' }}
              />
            </Grid.Column>
            <Grid.Column width="1" />
            <Grid.Column width="1">
              <Form>
                <Form.Field>
                  <input
                    max="100"
                    type="number"
                    style={{ width: '100%' }}
                    min="1"
                    onChange={this.handleChange1}
                    value={this.state.value1}
                  />
                </Form.Field>
              </Form>
            </Grid.Column>
            <Grid.Column width="1" style={{ marginTop: '12px' }}>
              % split
            </Grid.Column>
          </Grid.Row>
          {Array.apply(null, { length: this.state.count1 }).map((e, i) => (
            <Grid.Row key={i}>
              <Grid.Column width="3" />
              <Grid.Column width="6">
                <Form.Field
                  control={Select}
                  placeholder="UNCOVERED"
                  style={{ width: '100%' }}
                />
              </Grid.Column>
              <Grid.Column width="1" />
              <Grid.Column width="1">
                <Form>
                  <Form.Field>
                    <input
                      max="100"
                      type="number"
                      style={{ width: '100%' }}
                      min="1"
                      onChange={this.handleChange1}
                      value={100 - this.state.value1}
                    />
                  </Form.Field>
                </Form>
              </Grid.Column>
              <Grid.Column width="1" style={{ marginTop: '12px' }}>
                % split
              </Grid.Column>
              <Grid.Column width="1">
                <Icon
                  name="close"
                  onClick={() => {
                    this.setState({ count1: this.state.count1 - 1 });
                  }}
                />
              </Grid.Column>
            </Grid.Row>
          ))}
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="6">
              <Button
                onClick={() => {
                  this.setState({ count1: this.state.count1 + 1 });
                }}
              >
                + ADD ANOTHER REPORTING LOCATION
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
