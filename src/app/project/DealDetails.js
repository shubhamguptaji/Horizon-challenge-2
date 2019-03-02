import React, { Component } from 'react';
import {
  Grid,
  Form,
  Radio,
  Button,
  Select,
  Icon,
  TextArea,
  Input,
  Label
} from 'semantic-ui-react';
import Countries from './Countries';
import DealRolesAndDescription from './DealRolesAndDescription';
import DealRegion from './DealRegion';
import DealType from './DealType';
import ProductType from './ProductType';
import CSRole from './CSRole';
import moment from 'moment';
import { DatetimePickerTrigger } from 'rc-datetime-picker';
import { Checkbox } from 'antd';

export default class DealDetails extends Component {
  state = {
    disabled: false,
    coAdvisorCount: 0,
    DealSize: 0,
    providingFinancing: '',
    corporateAdvisory: '',
    hidden: true,
    ProjectStage: 'Mandate',
    MandateDate: moment(),
    EngagementLetterDate: '',
    AnnounceDate: moment(),
    ClosingDate: moment(),
    CommitmentDate: moment(),
    CompletionDate: moment()
  };

  handleChange = (e, { value }) => this.setState({ value });

  handleMandateDate = moment => {
    this.setState({
      MandateDate: moment
    });
  };

  handleAnnounceDate = moment => {
    this.setState({
      AnnounceDate: moment
    });
  };

  handleCompletionDate = moment => {
    this.setState({
      CompletionDate: moment
    });
  };

  handleCommitmentDate = moment => {
    this.setState({
      CommitmentDate: moment
    });
  };

  handleClosingDate = moment => {
    this.setState({
      ClosingDate: moment
    });
  };

  handleDealSize = e => {
    this.setState({ DealSize: e.target.value });
  };

  handleProvidingFinancing = (e, { value }) =>
    this.setState({ providingFinancing: value });

  handleCorporateAdvisory = (e, { value }) =>
    this.setState({ corporateAdvisory: value });

  render() {
    const { value } = this.state;
    return (
      <div>
        <Form>
          <Grid columns="2">
            <Grid.Row>
              <Grid.Column width="9">
                Please select the countries involved in the execution of the
                transaction (i.e. which CS legal entity will execute the deal?
                Are these bankers based in other countries?)
              </Grid.Column>
              <Grid.Column />
            </Grid.Row>
          </Grid>
          <Countries />
          <DealRolesAndDescription />
          <DealRegion />
          <DealType />
          <ProductType />
          <Grid columns="2">
            <Grid.Row>
              <Grid.Column width="3">Financing Purpose</Grid.Column>
              <Grid.Column width="6">
                <Form.Group inline>
                  <Form.Field
                    control={Radio}
                    label="M&A related"
                    value="M&A related"
                    checked={value === 'M&A related'}
                    onChange={this.handleChange}
                  />
                  <Form.Field
                    control={Radio}
                    label="Non-M&A related"
                    value="Non-M&A related"
                    checked={value === 'Non-M&A related'}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3">Hostile/Unsolicited</Grid.Column>
              <Grid.Column width="6">
                <Form.Group inline>
                  <Form.Field
                    control={Radio}
                    label="Yes"
                    value="Yes"
                    checked={value === 'Yes'}
                    onChange={this.handleChange}
                  />
                  <Form.Field
                    control={Radio}
                    label="No"
                    value="No"
                    checked={value === 'No'}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3">Special Committee</Grid.Column>
              <Grid.Column width="6">
                <Form.Group inline>
                  <Form.Field
                    control={Radio}
                    label="Yes"
                    value="Yes"
                    checked={value === 'Yes'}
                    onChange={this.handleChange}
                  />
                  <Form.Field
                    control={Radio}
                    label="No"
                    value="No"
                    checked={value === 'No'}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <CSRole />
          <Grid columns="2">
            <Grid.Row>
              <Grid.Column width="3"> Co-Advisor</Grid.Column>
              <Grid.Column width="6">
                <Form.Field control={Select} />
              </Grid.Column>
            </Grid.Row>
            {Array.apply(null, { length: this.state.coAdvisorCount }).map(i => (
              <Grid.Row key={i}>
                <Grid.Column width="3" />
                <Grid.Column width="6">
                  <Form.Field control={Select} />
                </Grid.Column>
                <Grid.Column width={1}>
                  <Icon
                    name="close"
                    onClick={() => {
                      this.setState({
                        coAdvisorCount: this.state.coAdvisorCount - 1
                      });
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
                    this.setState({
                      coAdvisorCount: this.state.coAdvisorCount + 1
                    });
                  }}
                >
                  + Add a co-advisor
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3">Transaction Description</Grid.Column>
              <Grid.Column width="6">
                <Form.Field control={TextArea} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3">
                Current Transaction Status (Notes)
              </Grid.Column>
              <Grid.Column width="6">
                <Form.Field control={TextArea} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3">Deal Currency & size</Grid.Column>
              <Grid.Column width="6">
                <Form.Field control={Select} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3" />
              <Grid.Column width="6">
                <Form.Field
                  control={Input}
                  type="number"
                  step="any"
                  onChange={this.handleDealSize}
                />
              </Grid.Column>
              <Grid.Column>Millions</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3" />
              <Grid.Column width="6">
                <Form.Field
                  control={Input}
                  value={this.state.DealSize}
                  disabled
                />
              </Grid.Column>
              <Grid.Column>$M (Rate)</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3">CS Providing Financing</Grid.Column>
              <Grid.Column width="6">
                <Form.Group inline>
                  <Form.Field
                    control={Radio}
                    label="Yes"
                    value="Yes"
                    checked={value === 'Yes'}
                    onChange={this.handleProvidingFinancing}
                  />
                  <Form.Field
                    control={Radio}
                    label="No"
                    value="No"
                    checked={value === 'No'}
                    onChange={this.handleProvidingFinancing}
                  />
                </Form.Group>
              </Grid.Column>
            </Grid.Row>
            {this.state.providingFinancing === 'Yes' ? (
              <Grid.Row>
                <Grid.Column width="3">Link to another CS Project</Grid.Column>
                <Grid.Column width="6">
                  <Form.Field control={Select} placeholder="Select a Date" />
                </Grid.Column>
              </Grid.Row>
            ) : (
              <div />
            )}
            {this.state.providingFinancing === 'Yes' ? (
              <Grid.Row>
                <Grid.Column width="3">Pro-Rata Size</Grid.Column>
                <Grid.Column width="6">
                  <Form.Field
                    control={Input}
                    type="number"
                    step="4"
                    placeholder="0"
                  />
                </Grid.Column>
                <Grid.Column width="1">USD</Grid.Column>
              </Grid.Row>
            ) : (
              <div />
            )}
            {this.state.providingFinancing === 'Yes' ? (
              <Grid.Row>
                <Grid.Column width="3">Institutional Size</Grid.Column>
                <Grid.Column width="6">
                  <Form.Field
                    control={Input}
                    type="number"
                    step="4"
                    placeholder="0"
                  />
                </Grid.Column>
                <Grid.Column width="1">USD</Grid.Column>
              </Grid.Row>
            ) : (
              <div />
            )}
            <Grid.Row>
              <Grid.Column width="3">
                HOLT Corporate Advisory
                <Icon
                  name="question circle outline"
                  onClick={() => {
                    this.setState({ hidden: !this.state.hidden });
                  }}
                />
                <Label
                  basic
                  pointing
                  hidden={this.state.hidden === true ? true : false}
                >
                  Selecting Yes confirms that someone from the HOLT team is or
                  will be involved in this project/deal either in the early
                  stages, or moving forward.
                </Label>
              </Grid.Column>
              <Grid.Column width="6">
                <Form.Group inline>
                  <Form.Field
                    control={Radio}
                    label="Yes"
                    value="Yes"
                    checked={value === 'Yes'}
                    onChange={this.handleCorporateAdvisory}
                  />
                  <Form.Field
                    control={Radio}
                    label="No"
                    value="No"
                    checked={value === 'No'}
                    onChange={this.handleCorporateAdvisory}
                  />
                </Form.Group>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3">Syndication Region</Grid.Column>
              <Grid.Column width="6">
                <Form.Field
                  control={Select}
                  placeholder="Select a region... "
                />
              </Grid.Column>
              <Grid.Column width="1">
                {this.state.ProjectStage === 'Mandate' ||
                this.state.ProjectStage === 'Execution'
                  ? '(Optional)'
                  : ''}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3">S&P/Moody</Grid.Column>
              <Grid.Column width="6">
                <Form.Field
                  control={Input}
                  type="text"
                  min={
                    this.state.ProjectStage === 'Mandate' ||
                    this.state.ProjectStage === 'Execution'
                      ? 0
                      : 1
                  }
                  placeholder="Select a region... "
                />
              </Grid.Column>
              <Grid.Column width="1">
                {this.state.ProjectStage === 'Mandate' ||
                this.state.ProjectStage === 'Execution'
                  ? '(Optional)'
                  : ''}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3">S&P</Grid.Column>
              <Grid.Column width="6">
                <Form.Field
                  control={Select}
                  options={[{ key: 'N/R', value: 'N/R', text: 'N/R' }]}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3">Fitch</Grid.Column>
              <Grid.Column width="6">
                <Form.Field control={Select} placeholder="Select a rating..." />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3">Moodys</Grid.Column>
              <Grid.Column width="6">
                <Form.Field
                  control={Select}
                  options={[{ key: 'N/R', value: 'N/R', text: 'N/R' }]}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3">CS Legal Contact</Grid.Column>
              <Grid.Column width="6">
                <Form.Field control={Select} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3">Date Mandated</Grid.Column>
              <Grid.Column width="6">
                <Form.Field
                  control={Input}
                  type="date"
                  value={this.state.MandateDate}
                  placeholder="Select a Date..."
                  Icon={false}
                />
                <DatetimePickerTrigger
                  moment={this.state.MandateDate}
                  onChange={this.handleMandateDate}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3">Engagement Letter Date</Grid.Column>
              <Grid.Column width="6">
                <Form.Field
                  control={Input}
                  disabled
                  value={this.state.EngagementLetterDate}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3">Engagement Letter Signed?</Grid.Column>
              <Grid.Column width="6">
                <Form.Field
                  control={Checkbox}
                  checked={
                    this.state.EngagementLetterDate === '' ? false : true
                  }
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3">Estimated Announcement Date</Grid.Column>
              <Grid.Column width="6">
                <Form.Field
                  control={Input}
                  type="date"
                  value={this.state.AnnounceDate}
                  placeholder="Select a Date..."
                  Icon={false}
                />
                <DatetimePickerTrigger
                  moment={this.state.moment}
                  onChange={this.handleAnnounceDate}
                />
              </Grid.Column>
              <Grid.Column width="1">(Optional)</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3">Estimated Closing Date</Grid.Column>
              <Grid.Column width="6">
                <Form.Field
                  control={Input}
                  type="date"
                  value={this.state.ClosingDate}
                  placeholder="Select a Date..."
                  Icon={false}
                />
                <DatetimePickerTrigger
                  moment={this.state.moment}
                  onChange={this.handleClosingDate}
                />
              </Grid.Column>
              <Grid.Column width="1">(Optional)</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3">CS commitment Date</Grid.Column>
              <Grid.Column width="6">
                <Form.Field
                  control={Input}
                  type="date"
                  value={this.state.CommitmentDate}
                  placeholder="Select a Date..."
                  Icon={false}
                />
                <DatetimePickerTrigger
                  moment={this.state.moment}
                  onChange={this.handleCommitmentDate}
                />
              </Grid.Column>
              <Grid.Column width="1">(Optional)</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3">Estimated Completion Date</Grid.Column>
              <Grid.Column width="6">
                <Form.Field
                  control={Input}
                  type="date"
                  value={this.state.CompletionDate}
                  placeholder="Select a Date..."
                  Icon={false}
                />
                <DatetimePickerTrigger
                  moment={this.state.moment}
                  onChange={this.handleCompletionDate}
                />
              </Grid.Column>
              <Grid.Column width="1">(Optional)</Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </div>
    );
  }
}
