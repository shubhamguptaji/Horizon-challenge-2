import React, { Component } from 'react';
import { Grid, Divider, Icon, Form, Button, Input } from 'semantic-ui-react';
import { cps } from '@redux-saga/core/effects';
const CLIENTS_SECTOR = "Client's Sector";
class Subcomponent extends Component {
  render() {
    return (
      <Grid.Row>
        {Array.apply(null, { length: this.props.count }).map((e, i) => (
          <Grid.Row key={i}>
            <Grid.Column width="6">
                  <Form.Input
                    placeholder="UNCOVERED"
                    type="text"
                    style={{ width: '60%' }}
                  />
                </Grid.Column>
                <Grid.Column width="3">
                  <Form.Input
                    type="text"
                    style={{ width: '50%' }}
                    value={this.props.value.toFixed(2)}
                  />
                  <span>% split</span>
                  <Icon name="close" onClick={this.props.handleremovesector}></Icon>
                </Grid.Column>
          </Grid.Row>
        ))}
      </Grid.Row>
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
    this.setState(
        { reportinglocation: this.state.reportinglocation + 1 });
  };
  handleremovesector = () => {
    this.setState({ reportingsector: this.state.reportingsector - 1 },function(){
        this.setState({value:100/this.state.reportingsector})
    });
  };
  handleremovelocation = () => {
    this.setState({ reportinglocation: this.state.reportinglocation - 1 });
  }
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
            <Grid.Column width="10">
              <Grid.Row>
                <Grid.Column width="6">
                  <Form.Input
                    placeholder="UNCOVERED"
                    type="text"
                    style={{ width: '60%' }}
                  />
                </Grid.Column>
                <Grid.Column width="3">
                  <Form.Input
                    type="text"
                    style={{ width: '50%' }}
                    value={this.state.value.toFixed(2)}
                  />
                  <span>%split</span>
                  
                </Grid.Column>
              </Grid.Row>

              {this.state.reportingsector > 1 ? (
                <Subcomponent count={this.state.reportingsector - 1} value={this.state.value} handleremovesector={this.handleremovesector} />
              ) : (
                <div />
              )}
            </Grid.Column>
            
          </Grid.Row>
          <Grid.Row>
              <Button onClick={this.handleaddsector}>+ADD ANTOHER REPORTING SECTOR</Button>
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
