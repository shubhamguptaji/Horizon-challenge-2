import React ,{Component} from 'react'
import { Grid, Divider, Icon, Form, Button, Input } from 'semantic-ui-react'
const CLIENTS_SECTOR="Client's Sector"
class Subcomponent extends Component{
 
    render()
    {
        return(
            <div Style={{marginTop:"40px"}}> 
              {console.log(this.props.count+"count")}
              {  Array.apply(null,{length:this.props.count}).map((e,i) => 
                    
                       
                    <Grid.Row key={i}>
                    <Grid.Column width="6">
                    <Form.Input placeholder="Select Sector of Client" type="text" style={{width:"100%"}}></Form.Input>
                    </Grid.Column>
                    </Grid.Row>
            
            )  }
            
            </div>
        );
    }
}
export default class ClientSector extends Component{
   constructor(){
       super();
       this.state={
           reportinglocation:1,
           reportingsector:1
       };
   }
    
    handleaddsector=()=>{
        this.setState({reportingsector:this.state.reportingsector+1});
        
    }
    handleaddlocation=()=>{
        this.setState({reportinglocation:this.state.reportinglocation+1})
    }
    handleremovesector=()=>{
        this.setState({reportingsector:this.state.reportinglocation-1})
    }
    handleremovelocation=()=>{
        this.setState({reportinglocation:this.state.reportinglocation-1})
    }
    render(){
        return(
            <div>
                {console.log(this.state.reportingsector)}
                <Grid columns="3">
                <Grid.Row>
                    <Grid.Column width="3">{CLIENTS_SECTOR}</Grid.Column>
                    <Grid.Column width="6">
                    <Form.Input placeholder="UNCOVERED" type="text" style={{width:"100%"}}></Form.Input>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width="3">CS Reporting Sector</Grid.Column>
                    <Grid.Column width="6">
                    <Form.Input placeholder="UNCOVERED" type="text" style={{width:"100%"}}></Form.Input> 
                    { this.state.reportingsector>1?(<Subcomponent count={this.state.reportingsector-1}/>):(<div/>)}
                  
                    <Form.Button onClick={this.handleaddsector}>+ADD ANOTHER REPORTING SECTOR</Form.Button>
                    </Grid.Column>
                    <Grid.Column width="1">hellosplit</Grid.Column>
                    
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width="3">Client Location</Grid.Column>
                    <Grid.Column width="6">
                    <Form.Input placeholder="UNCOVERED" type="text" style={{width:"100%"}}></Form.Input>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width="3">CS Reporting Location</Grid.Column>
                    <Grid.Column width="6">
                    <Form.Input placeholder="UNCOVERED" type="text" style={{width:"100%"}}></Form.Input>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </div>

        );

    }
}
