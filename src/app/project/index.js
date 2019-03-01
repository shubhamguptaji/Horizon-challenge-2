import React, { Component } from 'react';
import { Accordion, Divider, Grid, Icon } from 'semantic-ui-react';
import ProjectDetails from './ProjectDetails';
import DealDetails from './DealDetails';
import ClientSector from './ClientSector';

export default class CreateNewProject extends Component {
  state = { activeIndex: 4 };

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
            <Grid.Column>
              <h2>CREATE A NEW PROJECT</h2>
              <Divider />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
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
                <p />
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
                <p />
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
               <ClientSector/>
              </Accordion.Content>
            </Accordion>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
