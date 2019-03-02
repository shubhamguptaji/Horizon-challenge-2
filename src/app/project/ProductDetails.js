import React, { Component } from 'react';
import { Grid, Form, Select, Input } from 'semantic-ui-react';

class ProductDetails extends Component {
  state = {
    banker: false,
    productCategory: true,
    projectStage: 'Lost'
  };
  render() {
    const { productStage, products, category } = this.props;
    return (
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column width="1" />
          <Grid.Column width="2">Product Category</Grid.Column>
          <Grid.Column width="6">
            <Form.Field
              control={Select}
              options={category}
              placeholder="Select a category..."
              style={{ width: '100%' }}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="1" />
          <Grid.Column width="2">Product</Grid.Column>
          <Grid.Column width="6">
            <Form.Field
              control={Select}
              placeholder="Select a product..."
              options={products}
              style={{ width: '100%' }}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="1" />
          <Grid.Column width="2">Project Name</Grid.Column>
          <Grid.Column width="6">
            <Form.Field
              control={Input}
              placeholder="Add Project Name"
              style={{ width: '100%' }}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ marginTop: -15 }}>
          <Grid.Column width="3" />
          <Grid.Column width="6">
            NOTE: Project name can be changed later. The project code will be
            assigned when you save this project.
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="1" />
          <Grid.Column width="2">Product Stage</Grid.Column>
          <Grid.Column width="6">
            <Form.Field
              control={Select}
              placeholder="Stage project is currently at..."
              options={productStage}
              style={{ width: '100%' }}
            />
          </Grid.Column>
        </Grid.Row>
        {this.state.projectStage === 'Lost' ||
        this.state.projectStage === 'Dead' ? (
          <Grid.Row>
            <Grid.Column width="1" />
            <Grid.Column width="2">Reason</Grid.Column>
            <Grid.Column width="6">
              <Form.Field
                control={Input}
                placeholder="Reason for loss/death"
                style={{ width: '100%' }}
              />
            </Grid.Column>
          </Grid.Row>
        ) : (
          <div />
        )}
        {this.state.projectStage === 'Lost' ? (
          <Grid.Row>
            <Grid.Column width="1" />
            <Grid.Column width="2">To whom we lost</Grid.Column>
            <Grid.Column width="6">
              <Form.Field
                control={Select}
                placeholder="Select a company..."
                style={{ width: '100%' }}
              />
            </Grid.Column>
          </Grid.Row>
        ) : (
          <div />
        )}
      </Grid>
    );
  }
}

export default ProductDetails;
