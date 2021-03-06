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
  Label,
  Checkbox
} from 'semantic-ui-react';
import Countries from './Countries';
import DealRolesAndDescription from './DealRolesAndDescription';
import DealRegion from './DealRegion';
import DealType from './DealType';
import ProductType from './ProductType';
import CSRole from './CSRole';
import moment from 'moment';
import { DatetimePickerTrigger } from 'rc-datetime-picker';
import 'rc-datetime-picker/dist/picker.css';

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
    EngagementDate: moment(),
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

  handleEngagementDate = moment => {
    this.setState({
      EngagementDate: moment
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
              <Grid.Column width="1" />
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
              <Grid.Column width="1" />
              <Grid.Column width="2">Financing Purpose</Grid.Column>
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
              <Grid.Column width="1" />
              <Grid.Column width="2">Hostile/Unsolicited</Grid.Column>
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
              <Grid.Column width="1" />
              <Grid.Column width="2">Special Committee</Grid.Column>
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
              <Grid.Column width="1" />
              <Grid.Column width="2"> Co-Advisor</Grid.Column>
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
              <Grid.Column width="1" />
              <Grid.Column width="2">Transaction Description</Grid.Column>
              <Grid.Column width="6">
                <Form.Field control={TextArea} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="1" />
              <Grid.Column width="2">
                Current Transaction Status (Notes)
              </Grid.Column>
              <Grid.Column width="6">
                <Form.Field control={TextArea} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="1" />
              <Grid.Column width="2">Deal Currency & size</Grid.Column>
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
              <Grid.Column width="1">Millions</Grid.Column>
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
              <Grid.Column width="1">$M (Rate)</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="1" />
              <Grid.Column width="2">CS Providing Financing</Grid.Column>
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
                <Grid.Column width="1" />
                <Grid.Column width="2">Link to another CS Project</Grid.Column>
                <Grid.Column width="6">
                  <Form.Field control={Select} placeholder="Select a Date" />
                </Grid.Column>
              </Grid.Row>
            ) : (
              <div />
            )}
            {this.state.providingFinancing === 'Yes' ? (
              <Grid.Row>
                <Grid.Column width="1" />
                <Grid.Column width="2">Pro-Rata Size</Grid.Column>
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
                <Grid.Column width="1" />
                <Grid.Column width="2">Institutional Size</Grid.Column>
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
              <Grid.Column width="1" />
              <Grid.Column width="2">
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
              <Grid.Column width="1" />
              <Grid.Column width="2">Syndication Region</Grid.Column>
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
              <Grid.Column width="1" />
              <Grid.Column width="2">S&P/Moody</Grid.Column>
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
              <Grid.Column width="1" />
              <Grid.Column width="2">S&P</Grid.Column>
              <Grid.Column width="6">
                <Form.Field
                  control={Select}
                  options={[{ key: 'N/R', value: 'N/R', text: 'N/R' }]}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="1" />
              <Grid.Column width="2">Fitch</Grid.Column>
              <Grid.Column width="6">
                <Form.Field control={Select} placeholder="Select a rating..." />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="1" />
              <Grid.Column width="2">Moodys</Grid.Column>
              <Grid.Column width="6">
                <Form.Field
                  control={Select}
                  options={[{ key: 'N/R', value: 'N/R', text: 'N/R' }]}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="1" />
              <Grid.Column width="2">CS Legal Contact</Grid.Column>
              <Grid.Column width="6">
                <Form.Field control={Select} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="1" />
              <Grid.Column width="2">Date Mandated</Grid.Column>
              <Grid.Column width="6">
                <DatetimePickerTrigger
                  moment={this.state.MandateDate}
                  onChange={this.handleMandateDate}
                >
                  <Form.Field
                    control={Input}
                    moment={this.state.moment}
                    value={this.state.MandateDate.format('YYYY-MM-DD')}
                    placeholder="Select a Date..."
                    Icon={false}
                  />
                </DatetimePickerTrigger>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="1" />
              <Grid.Column width="2">Engagement Letter Date</Grid.Column>
              <Grid.Column width="6">
                <DatetimePickerTrigger
                  moment={this.state.EngagementDate}
                  onChange={this.handleEngagementDate}
                >
                  <Form.Field
                    control={Input}
                    moment={this.state.moment}
                    value={this.state.EngagementDate.format('YYYY-MM-DD')}
                    placeholder="Select a Date..."
                    Icon={false}
                  />
                </DatetimePickerTrigger>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="1" />
              <Grid.Column width="2">Engagement Letter Signed?</Grid.Column>
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
              <Grid.Column width="1" />
              <Grid.Column width="2">Estimated Announcement Date</Grid.Column>
              <Grid.Column width="6">
                <DatetimePickerTrigger
                  moment={this.state.AnnounceDate}
                  onChange={this.handleAnnounceDate}
                >
                  <Form.Field
                    control={Input}
                    moment={this.state.moment}
                    value={this.state.AnnounceDate.format('YYYY-MM-DD')}
                    placeholder="Select a Date..."
                    Icon={false}
                  />
                </DatetimePickerTrigger>
              </Grid.Column>
              <Grid.Column width="1">(Optional)</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="1" />
              <Grid.Column width="2">Estimated Closing Date</Grid.Column>
              <Grid.Column width="6">
                <DatetimePickerTrigger
                  moment={this.state.ClosingDate}
                  onChange={this.handleClosingDate}
                >
                  <Form.Field
                    control={Input}
                    moment={this.state.moment}
                    value={this.state.ClosingDate.format('YYYY-MM-DD')}
                    placeholder="Select a Date..."
                    Icon={false}
                  />
                </DatetimePickerTrigger>
              </Grid.Column>
              <Grid.Column width="1">(Optional)</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="1" />
              <Grid.Column width="2">CS commitment Date</Grid.Column>
              <Grid.Column width="6">
                <DatetimePickerTrigger
                  moment={this.state.CommitmentDate}
                  onChange={this.handleCommitmentDate}
                >
                  <Form.Field
                    control={Input}
                    moment={this.state.moment}
                    value={this.state.CommitmentDate.format('YYYY-MM-DD')}
                    placeholder="Select a Date..."
                    Icon={false}
                  />
                </DatetimePickerTrigger>
              </Grid.Column>
              <Grid.Column width="1">(Optional)</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="1" />
              <Grid.Column width="2">Estimated Completion Date</Grid.Column>
              <Grid.Column width="6">
                <DatetimePickerTrigger
                  moment={this.state.CompletionDate}
                  onChange={this.handleCompletionDate}
                >
                  <Form.Field
                    control={Input}
                    moment={this.state.moment}
                    value={this.state.CompletionDate.format('YYYY-MM-DD')}
                    placeholder="Select a Date..."
                    Icon={false}
                  />
                </DatetimePickerTrigger>
              </Grid.Column>
              <Grid.Column width="1">(Optional)</Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </div>
    );
  }
}
