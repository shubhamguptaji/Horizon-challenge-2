import React, { Component } from 'react';
import { Button, Form, Grid, Select } from 'semantic-ui-react';

export default class CSRole extends Component {
  state = {
    value1: '',
    value2: ''
  };

  handleCSRoleChange = e => {
    e.preventDefault();
    this.setState({ value1: e.target.value });
  };

  handleCSRoleChange2 = e => {
    e.preventDefault();
    this.setState({ value2: e.target.value });
  };

  render() {
    return (
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column width="3">CS Role</Grid.Column>
          <Grid.Column width="6">
            <Form.Field control={Select} placeholder="Select a role" />
          </Grid.Column>
        </Grid.Row>
        {this.state.disabled === true ? (
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="6">
              <Form.Field
                control={Select}
                placeholder="Select a role..."
                onChange={this.changeValue1}
                error={
                  this.state.value1 === this.state.value2 &&
                  this.state.value2 !== ''
                    ? true
                    : false
                }
              />
            </Grid.Column>
          </Grid.Row>
        ) : (
          <div />
        )}
        <Grid.Row>
          <Grid.Column width="3" />
          <Grid.Column width="3">
            <Button
              disabled={this.state.disabled}
              onClick={() => {
                this.setState({ disabled: true });
              }}
            >
              + Add another role
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
