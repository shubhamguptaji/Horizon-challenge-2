import React, { Component } from 'react';
import { Form, Grid, Checkbox, Divider, Select } from 'semantic-ui-react';

export default class ProjectDetails extends Component {
  render() {
    const { productStage, products, category } = this.props;
    return (
      <div>
        <Form>
          <Grid columns="2">
            <Grid.Row>
              <Grid.Column width="2">Client</Grid.Column>
              <Grid.Column width="1" />
              <Grid.Column width="6">
                <Form.Field control="input" />
              </Grid.Column>
            </Grid.Row>
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
              <Grid.Column width="2">Product Category</Grid.Column>
              <Grid.Column width="1" />
              <Grid.Column width="6">
                <Form.Field
                  control={Select}
                  options={category}
                  placeholder="Select a category..."
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="2">Product</Grid.Column>
              <Grid.Column width="1" />
              <Grid.Column width="6">
                <Form.Field
                  control={Select}
                  placeholder="Select a product..."
                  options={products}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="2">Project Name</Grid.Column>
              <Grid.Column width="1" />
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
              <Grid.Column width="2">Product Stage</Grid.Column>
              <Grid.Column width="1" />
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
