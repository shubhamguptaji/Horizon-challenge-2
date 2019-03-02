import React, { Component } from 'react';
import { Form, Grid, Checkbox, Divider } from 'semantic-ui-react';
import { AutoComplete } from 'antd';
import LegalEntity from './LegalEntity';
import ProductDetails from './ProductDetails';
import KYCDetails from './KYCDetails';

const Option = AutoComplete.Option;

class ProjectDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      client: '',
      response: [],
      showInputBox: true,
      rcgValue: true
    };
  }

  onSelect = value => {
    this.setState({ client: value });
    console.log(this.state);
  };

  handleChange = value => {
    if (value.length < 2) return;
    const endpoint = `http://localhost:3000/Search?q=${value}&ps=50&pc=1&c=CLIENT`;

    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        this.setState({ response: data.response.clients });
      });
  };

  handleCheckbox = () => {
    const oldState = this.state.client;
    // if (oldState === 'CONFIDENTIAL') this.setState({ client: '' });
    if (this.state.client === 'CONFIDENTIAL')
      this.setState({ client: oldState });
    else this.setState({ client: 'CONFIDENTIAL' });
    this.setState({ showInputBox: !this.state.showInputBox });
    console.log(this.state);
  };

  render() {
    console.log(this.props);
    const children = this.state.response.map(item => (
      <Option
        key={item.id}
        disabled={item.ibcmNewProjectFlag === 'uncovered' ? true : false}
      >
        {item.id}
        {'  '}
        {item.legalName}
      </Option>
    ));

    return (
      <div>
        <Grid columns="2">
          {this.state.showInputBox === true ? (
            <Grid.Row>
              <Grid.Column width="1" />
              <Grid.Column width="2">Client</Grid.Column>
              <Grid.Column width="6">
                <AutoComplete
                  autoFocus={true}
                  backfill={true}
                  onChange={this.handleChange}
                  onSelect={this.onSelect}
                  style={{ width: '100%' }}
                >
                  {children}
                </AutoComplete>
              </Grid.Column>
            </Grid.Row>
          ) : (
            <Grid.Row />
          )}
          <Grid.Row style={{ marginTop: -15 }}>
            <Grid.Column width="3" />
            <Grid.Column width="6">
              <Form.Field>
                <Checkbox
                  label="No client (For highly confidential projects)"
                  onChange={this.handleCheckbox}
                />
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {this.state.rcgValue === true ? <LegalEntity /> : <Grid.Row />}
        <Grid>
          <Grid.Row>
            <Grid.Column width="16">
              <Divider />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <KYCDetails />
        <ProductDetails />
      </div>
    );
  }
}

export default ProjectDetails;
