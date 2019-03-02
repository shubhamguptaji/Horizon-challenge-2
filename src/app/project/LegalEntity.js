import React, { Component } from 'react';
import { Grid, Divider, Icon, Form, Button, Input } from 'semantic-ui-react';
import { Select } from 'antd';

class LegalEntity extends Component {
  state = {
    showInput: false,
    buttonDisabled: true,
    count: 1
  };
  render() {
    return (
      <div>
        {Array.apply(null, { length: this.state.count }).map((e, i) => (
          <Grid columns="2" key={i}>
            {this.state.count > 1 ? (
              <Grid.Row>
                <Grid.Column width="16">
                  <Divider />
                </Grid.Column>
              </Grid.Row>
            ) : (
              <div />
            )}
            <Grid.Row>
              <Grid.Column width="1" />
              <Grid.Column width="2">Client Legal Entity</Grid.Column>
              <Grid.Column width="6">
                <Form.Field
                  control={Select}
                  placeholder="Select a legal Entity..."
                  style={{ width: '100%' }}
                  error
                  onSelect={() => {
                    this.setState({ buttonDisabled: false });
                  }}
                >
                  <option
                    key="message"
                    value=""
                    disabled
                    style={{ textAlign: 'center' }}
                  >
                    No Legal Entities for Client
                    <Divider />
                  </option>
                  <option value="null" key="null">
                    Legal entity not listed
                  </option>
                </Form.Field>
              </Grid.Column>
              <Grid.Column width="1">
                <Button
                  style={{ height: '25', width: '25' }}
                  onClick={() =>
                    this.setState({ showInput: !this.state.showInput })
                  }
                >
                  <Icon name="search" size="large" />
                </Button>
              </Grid.Column>
              {this.state.count >= 2 ? (
                <Grid.Column width="1">
                  <Icon
                    name="close"
                    onClick={() => {
                      this.setState({ count: this.state.count - 1 });
                    }}
                  />
                </Grid.Column>
              ) : (
                <div />
              )}
            </Grid.Row>
            {this.state.showInput === true ? (
              <Grid.Row>
                <Grid.Column width="3" />
                <Grid.Column width="6">
                  <Form.Field control={Input} style={{ width: '100%' }} />
                </Grid.Column>
              </Grid.Row>
            ) : (
              <div />
            )}
            <Grid.Row>
              <Grid.Column width="1" />
              <Grid.Column width="2">CS Booking Entity</Grid.Column>
              <Grid.Column width="6">
                <Form.Field
                  control={Select}
                  placeholder="Select a CS Entity..."
                  style={{ width: '100%' }}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="1" />
              <Grid.Column width="2">Entity KYC Status</Grid.Column>
              <Grid.Column width="6">
                <Form.Field
                  control={Select}
                  placeholder="Select status..."
                  style={{ width: '100%' }}
                  onSelect={() => {
                    this.setState({ buttonDisabled: false });
                  }}
                >
                  <option value="Not Started">Not Started</option>
                  <option value="In Progress">In Progress</option>
                  <option value="On Hold">On Hold</option>
                  <option value="Complete">Complete</option>
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        ))}
        <Grid columns="2">
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column>
              <Button
                color="white"
                disabled={this.state.buttonDisabled === true ? true : false}
                onClick={() => {
                  this.setState({ count: this.state.count + 1 });
                  this.setState({ buttonDisabled: true });
                }}
              >
                + Add another entity
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default LegalEntity;
