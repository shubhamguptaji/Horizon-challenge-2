import React, { Component } from 'react';
import { Grid, Divider, Icon, Form, Button, Input } from 'semantic-ui-react';
import { cps } from '@redux-saga/core/effects';
const CLIENTS_SECTOR = "Client's Sector";
class Subcomponent extends Component {
  render() {
    return (
      <div Style={{ marginTop: '40px' }}>
        {Array.apply(null, { length: this.props.count }).map((e, i) => (
          <Grid.Row key={i}>
            <Grid.Column width="6">
              <Form.Input
                placeholder="Select Sector of Client"
                type="text"
                style={{ width: '100%' }}
              />
            </Grid.Column>
          </Grid.Row>
        ))}
      </div>
    );
  }
}
class Subcomponent2 extends Component {
  render() {
    return (
      <div>
        {Array.apply(null, { length: this.props.count }).map((e, i) => (
          <div key={i}>
            <Form.Input
              type="text"
              style={{ width: '100%' }}
              value={this.props.value}
            />
            <Button>% Split</Button>
          </div>
        ))}
      </div>
    );
  }
}
export default class ClientSector extends Component {
  constructor() {
    super();
    this.state = {
      reportinglocation: 1,
      reportingsector: 1,
      value: 100
    };
  }

  handleaddsector = () => {
    this.setState(
      { reportingsector: this.state.reportingsector + 1 },
      function() {
        this.setState({ value: 100 / this.state.reportingsector }, function() {
          console.log(this.state.reportingsector + 'reporting sector');
        });
      }
    );
  };
  handleaddlocation = () => {
    this.setState({ reportinglocation: this.state.reportinglocation + 1 });
  };
  handleremovesector = () => {
    this.setState({ reportingsector: this.state.reportinglocation - 1 });
  };
  handleremovelocation = () => {
    this.setState({ reportinglocation: this.state.reportinglocation - 1 });
  };
  render() {
    console.log(this.state.reportingsector + 'rendered report');
    return (
      <div>
        {console.log(this.state.reportingsector)}
        <Grid columns="3">
          <Grid.Row>
            <Grid.Column width="3">{CLIENTS_SECTOR}</Grid.Column>
            <Grid.Column width="6">
              <Form.Input
                placeholder="UNCOVERED"
                type="text"
                style={{ width: '100%' }}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="3">CS Reporting Sector</Grid.Column>
            <Grid.Column width="6">
              <Form.Input
                placeholder="UNCOVERED"
                type="text"
                style={{ width: '100%' }}
              />
              {this.state.reportingsector > 1 ? (
                <Subcomponent count={this.state.reportingsector - 1} />
              ) : (
                <div />
              )}

              <Form.Button onClick={this.handleaddsector}>
                +ADD ANOTHER REPORTING SECTOR
              </Form.Button>
            </Grid.Column>
            
            <Grid.Column width="3" >
              <Grid.Row>
                <div>
                  <Form.Input
                    type="text"
                    style={{ width: '50%' ,display:"inline-block"}}
                    value={this.state.value.toFixed(2)}
                  />

                  <Button >% Split</Button>
                </div>
              </Grid.Row>

              <Grid.Row>
                {console.log(this.state.value + 'value')}
                {this.state.reportingsector > 1 ? (
                  <Subcomponent2
                    count={this.state.reportingsector - 1}
                    value={this.state.value.toFixed(2)}
                  />
                ) : (
                  <div />
                )}
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width="3">Client Location</Grid.Column>
            <Grid.Column width="6">
              <Form.Input
                placeholder="UNCOVERED"
                type="text"
                style={{ width: '100%' }}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="3">CS Reporting Location</Grid.Column>
            <Grid.Column width="6">
              <Form.Input
                placeholder="UNCOVERED"
                type="text"
                style={{ width: '100%' }}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
