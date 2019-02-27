import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestApiData } from '../../store/action';
import { Form, Grid, Checkbox, Divider, Select } from 'semantic-ui-react';
import { AutoComplete } from 'antd';

const Option = AutoComplete.Option;

class ProjectDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      str: '',
      response: [],
      showInputBox: true
    };
  }

  onSelect = value => {
    this.setState({ str: value });
    console.log(this.state);
  };

  handleChange = value => {
    if (value.length < 2) return;
    const endpoint = `http://localhost:3000/Search?q=${value}&ps=50&pc=1&c=CLIENT`;

    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        this.setState({ response: data.response.employees });
      });
  };
  render() {
    const { productStage, products, category } = this.props;
    console.log(this.state);
    const children = this.state.response.map(item => (
      <Option key={item.id}>{item.firstName}</Option>
    ));
    return (
      <div>
        <Form>
          <Grid columns="2">
            {this.state.showInputBox === true ? (
              <Grid.Row>
                <Grid.Column width="3">Client</Grid.Column>
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
              <div />
            )}
            <Grid.Row style={{ marginTop: -15 }}>
              <Grid.Column width="3" />
              <Grid.Column width="6">
                <Form.Field>
                  <Checkbox label="No client (For highly confidential projects)" />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Divider />
            <Grid.Row>
              <Grid.Column width="3">Product Category</Grid.Column>
              <Grid.Column width="6">
                <Form.Field
                  control={Select}
                  options={category}
                  placeholder="Select a category..."
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3">Product</Grid.Column>
              <Grid.Column width="6">
                <Form.Field
                  control={Select}
                  placeholder="Select a product..."
                  options={products}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3">Project Name</Grid.Column>
              <Grid.Column width="6">
                <Form.Field control="input" placeholder="Add Project Name" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ marginTop: -15 }}>
              <Grid.Column width="3" />
              <Grid.Column width="6">
                NOTE: Project name can be changed later. The project code will
                be assigned when you save this project.
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3">Product Stage</Grid.Column>
              <Grid.Column width="6">
                <Form.Field
                  control={Select}
                  placeholder="Stage project is currently at..."
                  options={productStage}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    requestApiData: query => dispatch(requestApiData(query))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDetails);
