import React, { Component } from 'react';
import { Grid, Form, Select, Input, Button, Divider } from 'semantic-ui-react';
import moment from 'moment';
import { DatetimePickerTrigger } from 'rc-datetime-picker';
import 'rc-datetime-picker/dist/picker.css';

export default class FeesAndPipelineEstimates extends Component {
  state = {
    moment: moment(),
    ProjectRevenueCount: 1,
    grossSpeed: 0,
    handleFilingDate: moment()
  };

  handleChange = moment => {
    this.setState({
      moment
    });
  };

  handleFilingDateChange = moment => {
    this.setState({ handleFilingDate: moment });
  };

  handleGrossSpeedChange = e => {
    e.preventDefault();
    this.setState({ grossSpeed: e.target.value });
  };

  render() {
    return (
      <div>
        <Grid columns="2">
          <Grid.Row>
            <Grid.Column width="1" />
            <Grid.Column width="7">
              These Revenues are owned by the project sponsor group and will be
              reflected on all management pipeline reports, including the group
              activity report and the client activity report
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="1" />
            <Grid.Column width="7">
              Need help? View IBCM probability guidelines
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {Array.apply(null, { length: this.state.ProjectRevenueCount }).map(
          (e, i) => (
            <Grid columns="2" key={i}>
              <Grid.Row>
                <Grid.Column width="1" />
                <Grid.Column width="2">Rev. Type</Grid.Column>
                <Grid.Column width="6">
                  <Form.Field
                    control={Select}
                    placeholder="Select Revenue Type"
                    style={{ width: '100%' }}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width="1" />
                <Grid.Column width="2">Estimated Gross Revenue</Grid.Column>
                <Grid.Column width="6">
                  <Form.Field
                    control={Input}
                    type="text"
                    placeholder="0"
                    style={{ width: '100%' }}
                  />
                </Grid.Column>
                <Grid.Column width="1">(USD 000s)</Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width="1" />
                <Grid.Column width="2">Estimated Revenue Date</Grid.Column>
                <Grid.Column width="6">
                  <DatetimePickerTrigger
                    moment={this.state.moment}
                    onChange={this.handleChange}
                  >
                    <Form.Field
                      control={Input}
                      moment={this.state.moment}
                      onChange={this.handleChange}
                      style={{ width: '100%' }}
                      value={this.state.moment.format('YYYY-MM-DD')}
                      readOnly
                    />
                  </DatetimePickerTrigger>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          )
        )}
        <Grid columns="2">
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="6">
              <Button
                onClick={() =>
                  this.setState({
                    ProjectRevenueCount: this.state.ProjectRevenueCount + 1
                  })
                }
              >
                Add Project Revenue
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Divider />
          <Grid.Row>
            <Grid.Column width="1" />
            <Grid.Column width="2">Gross Spread</Grid.Column>
            <Grid.Column width="6">
              <Form.Field
                control={Input}
                type="number"
                placeholder="0"
                // value={this.state.grossSpeed}
                step="4"
                onChange={this.handleGrossSpeedChange}
                style={{ width: '100%' }}
              />
            </Grid.Column>
            <Grid.Column width="1">%</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="1" />
            <Grid.Column width="2">CS Economics</Grid.Column>
            <Grid.Column width="6">
              <Form.Field
                control={Input}
                type="number"
                style={{ width: '100%' }}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="1" />
            <Grid.Column width="2">Management Fees</Grid.Column>
            <Grid.Column width="6">
              <Form.Field
                control={Input}
                type="number"
                placeholder="0"
                step="4"
                // onChange={this.handleGrossSpeedChange}
                style={{ width: '100%' }}
              />
            </Grid.Column>
            <Grid.Column width="1">%</Grid.Column>
          </Grid.Row>
          <Divider />
          <Grid.Row>
            <Grid.Column width="1" />
            <Grid.Column width="2">Equity Registration Status</Grid.Column>
            <Grid.Column width="6">
              <Form>
                <Form.Field
                  control="select"
                  placeholder="Filed"
                  style={{ width: '100%' }}
                  // style={{ width: '100%', height: }}
                >
                  <option value="Filed" defaultValue>
                    Filed
                  </option>
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="1" />
            <Grid.Column width="2">Filing Date</Grid.Column>
            <Grid.Column width="6">
              <DatetimePickerTrigger
                moment={this.state.handleFilingDate}
                onChange={this.handleFilingDateChange}
              >
                <Form.Field
                  control={Input}
                  moment={this.state.handleFilingDate}
                  onChange={this.handleFilingDateChange}
                  style={{ width: '100%' }}
                  value={this.state.handleFilingDate.format('YYYY-MM-DD')}
                  readOnly
                />
              </DatetimePickerTrigger>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="1" />
            <Grid.Column width="2">Number of Shares</Grid.Column>
            <Grid.Column width="6">
              <Form.Field
                control={Input}
                type="number"
                placeholder="0"
                max="2147483648"
                style={{ width: '100%' }}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="1" />
            <Grid.Column width="2">Price (Per Share)</Grid.Column>
            <Grid.Column width="6">
              <Form.Field
                control={Input}
                placeholder="0"
                type="number"
                style={{ width: '100%' }}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="1" />
            <Grid.Column width="2">CS Commitment Amount</Grid.Column>
            <Grid.Column width="6">
              <Form.Field
                control={Input}
                type="number"
                placeholder="0"
                style={{ width: '100%' }}
              />
            </Grid.Column>
            <Grid.Column width="1">USD</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="1" />
            <Grid.Column width="2">CS Hold Amount</Grid.Column>
            <Grid.Column width="6">
              <Form.Field
                control={Input}
                type="number"
                placeholder="0"
                style={{ width: '100%' }}
              />
            </Grid.Column>
            <Grid.Column width="1">USD</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="1" />
            <Grid.Column width="2">Available for Sale</Grid.Column>
            <Grid.Column width="6">
              <Form.Field
                control={Input}
                type="number"
                placeholder="0"
                style={{ width: '100%' }}
              />
            </Grid.Column>
            <Grid.Column width="1">USD</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="1" />
            <Grid.Column width="2">Mark-to-Market</Grid.Column>
            <Grid.Column width="6">
              <Form.Field
                control={Input}
                type="number"
                placeholder="0"
                style={{ width: '100%' }}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="1" />
            <Grid.Column width="2">
              Facility Fee / Commitment Fee (bps)
            </Grid.Column>
            <Grid.Column width="6">
              <Form.Field
                control={Input}
                type="number"
                placeholder="0"
                style={{ width: '100%' }}
              />
            </Grid.Column>
            <Grid.Column width="1">bps</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="1" />
            <Grid.Column width="2">Underwriting Fee (bps)</Grid.Column>
            <Grid.Column width="6">
              <Form.Field
                control={Input}
                type="number"
                placeholder="0"
                style={{ width: '100%' }}
              />
            </Grid.Column>
            <Grid.Column width="1">bps</Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
