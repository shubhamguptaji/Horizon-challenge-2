import React, { Component } from 'react';
import { Accordion, Divider, Grid, Icon } from 'semantic-ui-react';
import ProjectDetails from './ProjectDetails';
import DealDetails from './DealDetails';
import ClientSectorAndReporting from './ClientSectorAndReporting';
import DealTeam from './DealTeam';
import FeesAndPipelineEstimates from './FeesAndPipelineEstimates';

export default class CreateNewProject extends Component {
  state = {
    activeIndex: 0,
    count1: 0,
    count2: 0,
    count3: 0,
    count4: 0,
    count5: 0
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width="1" />
            <Grid.Column width="15">
              <h2 style={{ marginTop: '24px' }}>CREATE A NEW PROJECT</h2>
            </Grid.Column>
          </Grid.Row>
          <Divider />
          <Grid.Row>
            <Grid.Column width="1" />
            <Grid.Column width="15">
              <Accordion fluid styled>
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={this.handleClick}
                >
                  PROJECT DETAILS
                  <Icon name="dropdown" style={{ float: 'right' }} />
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <ProjectDetails />
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 1}
                  index={1}
                  onClick={this.handleClick}
                >
                  DEAL DETAILS
                  <Icon name="dropdown" style={{ float: 'right' }} />
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                  <DealDetails />
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 2}
                  index={2}
                  onClick={this.handleClick}
                >
                  DEAL TEAM
                  <Icon name="dropdown" style={{ float: 'right' }} />
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                  <DealTeam />
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex === 3}
                  index={3}
                  onClick={this.handleClick}
                >
                  FEES AND PIPELINE ESTIMATES
                  <Icon name="dropdown" style={{ float: 'right' }} />
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 3}>
                  <FeesAndPipelineEstimates />
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex === 4}
                  index={4}
                  onClick={this.handleClick}
                >
                  CLIENT SECTOR & REPORTING
                  <Icon name="dropdown" style={{ float: 'right' }} />
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 4}>
                  <ClientSectorAndReporting />
                </Accordion.Content>
              </Accordion>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
