import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import {Button , Modal} from 'react-bootstrap';
import ShowDB from './ShowDB';

class DataBase extends Component {


    state = {
        show : false,
        EditData : false,
    }

  
    render()
    {
       return (
        <div className = "DataBase">
                <Button variant="primary" onClick={() => this.setState({show : true})} className = " animated bounceInRight">
                    Show DataBase
                </Button>
                
                
                <br/><br/>

               
                <ShowDB show = {this.state.show} onHide={() => this.setState({show : false}) } numbers = {this.props.numbers} addnumber = {(e) => this.props.addnumber(e)}/>
               
        </div>  
       )
      
      
    }
 
}

export default DataBase;