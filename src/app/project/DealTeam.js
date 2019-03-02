import React, { Component } from 'react';
import { Grid, Image, Form, Select, Divider, Button } from 'semantic-ui-react';
import { AutoComplete } from 'antd';

export default class DealTeam extends Component {
  state = {
    user: {
      imgSrc: '1',
      department: 'ABC'
    },
    SponsorResponse: [],
    AddRoleCount: 0,
    AddBankerCount: 0
  };

  handleChange = value => {
    if (value.length < 2) return;
    const endpoint = '';

    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        this.setState({ SponsorResponse: data.response });
      });
  };

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width="2" />
            <Grid.Column width="3">
              <Image
                src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                // {
                //   this.state.user.imgSrc === '1'
                //     ? 'https://react.semantic-ui.com/images/wireframe/square-image.png'
                //     : this.state.user.imgSrc
                // }
                size="tiny"
                circular
              />
              <Grid.Column width="2">
                Department {this.state.user.department}
              </Grid.Column>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="6">
              <Form.Field
                control={Select}
                placeholder="Select a role..."
                style={{ width: '100%' }}
              />
            </Grid.Column>
          </Grid.Row>
          <Divider />
          <Grid.Row>
            <Grid.Column width="3">Sponsor</Grid.Column>
            <Grid.Column width="6">
              <AutoComplete
                autoFocus={true}
                backfill={true}
                onChange={this.handleChange}
                onSelect={this.onSelect}
                style={{ width: '100%' }}
              >
                {this.state.SponsorResponse.map(i => (
                  <option key={i.id}>
                    <Grid columns="2">
                      <Grid.Row>
                        <Image src={i.imgSrc}>{i.name}</Image>
                      </Grid.Row>
                      <Grid.Row>{i.company}</Grid.Row>
                    </Grid>
                  </option>
                ))}
              </AutoComplete>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="6">
              <Form.Field
                control={Select}
                placeholder="Select a role..."
                style={{ width: '100%' }}
              />
            </Grid.Column>
            {this.state.AddRoleCount === 0 ? (
              <Grid.Column width="1">
                <Button
                  onClick={() => {
                    this.setState({
                      AddRoleCount: this.state.AddRoleCount + 1
                    });
                  }}
                >
                  Add
                </Button>
              </Grid.Column>
            ) : (
              <div />
            )}
          </Grid.Row>
        </Grid>
        {Array.apply(null, { length: this.state.AddRoleCount }).map((e, i) => (
          <Grid columns="2" key={i}>
            <Grid.Row>
              <Grid.Column width="3" />
              <Grid.Column width="6">
                <AutoComplete
                  autoFocus={true}
                  backfill={true}
                  onChange={this.handleChange}
                  onSelect={this.onSelect}
                  style={{ width: '100%' }}
                >
                  {this.state.SponsorResponse.map(item => (
                    <option key={item.id}>
                      <Grid columns="2">
                        <Grid.Row>
                          <Image src={item.imgSrc}>{item.name}</Image>
                        </Grid.Row>
                        <Grid.Row>{item.company}</Grid.Row>
                      </Grid>
                    </option>
                  ))}
                </AutoComplete>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3" />
              <Grid.Column width="6">
                <Form.Field
                  control={Select}
                  placeholder="Select a role..."
                  style={{ width: '100%' }}
                />
              </Grid.Column>
              {this.state.AddRoleCount === i ? (
                <Grid.Column width="1">
                  <Button
                    onClick={() => {
                      this.setState({
                        AddRoleCount: this.state.AddRoleCount + 1
                      });
                    }}
                  >
                    Add
                  </Button>
                </Grid.Column>
              ) : (
                <div />
              )}
            </Grid.Row>
          </Grid>
        ))}
        <Grid columns="2">
          <Grid.Row>
            <Grid.Column width="3" />
          </Grid.Row>
          <Divider />
          <Grid.Row>
            <Grid.Column width="3">Banker</Grid.Column>
            <Grid.Column width="6">
              <AutoComplete
                autoFocus={true}
                backfill={true}
                onChange={this.handleChange}
                onSelect={this.onSelect}
                style={{ width: '100%' }}
              >
                {this.state.SponsorResponse.map(item => (
                  <option key={item.id}>
                    <Grid columns="2">
                      <Grid.Row>
                        <Image src={item.imgSrc}>{item.name}</Image>
                      </Grid.Row>
                      <Grid.Row>{item.company}</Grid.Row>
                    </Grid>
                  </option>
                ))}
              </AutoComplete>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="6">
              <Form.Field
                control={Select}
                placeholder="Select a role..."
                style={{ width: '100%' }}
              />
            </Grid.Column>
            {this.state.AddBankerCount === 0 ? (
              <Grid.Column width="1">
                <Button
                  onClick={() => {
                    this.setState({
                      AddBankerCount: this.state.AddBankerCount + 1
                    });
                  }}
                >
                  Add
                </Button>
              </Grid.Column>
            ) : (
              <div />
            )}
          </Grid.Row>
        </Grid>
        {Array.apply(null, { length: this.state.AddBankerCount }).map(
          (e, i) => (
            <Grid columns="2" key={i}>
              <Grid.Row>
                <Grid.Column width="3" />
                <Grid.Column width="6">
                  <AutoComplete
                    autoFocus={true}
                    backfill={true}
                    onChange={this.handleChange}
                    onSelect={this.onSelect}
                    style={{ width: '100%' }}
                  >
                    {this.state.SponsorResponse.map(item => (
                      <option key={item.id}>
                        <Grid columns="2">
                          <Grid.Row>
                            <Image src={item.imgSrc}>{item.name}</Image>
                          </Grid.Row>
                          <Grid.Row>{item.company}</Grid.Row>
                        </Grid>
                      </option>
                    ))}
                  </AutoComplete>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width="3" />
                <Grid.Column width="6">
                  <Form.Field
                    control={Select}
                    placeholder="Select a role..."
                    style={{ width: '100%' }}
                  />
                </Grid.Column>
                {this.state.AddBankerCount === i ? (
                  <Grid.Column width="1">
                    <Button
                      onClick={() => {
                        this.setState({
                          AddBankerCount: this.state.AddBankerCount + 1
                        });
                      }}
                    >
                      Add
                    </Button>
                  </Grid.Column>
                ) : (
                  <div />
                )}
              </Grid.Row>
            </Grid>
          )
        )}
      </div>
    );
  }
}
