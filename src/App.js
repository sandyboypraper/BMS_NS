import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputHandler from './Components/InputHandler';
import DataBase from './Components/DataBase';


class App extends React.Component {

  state = {
    numbers : [],
  }

  addnumber = (e) => {
    console.log(e);
    this.setState({
        numbers : [...this.state.numbers , e]
    })        
  }

  delete = (e) => {
    console.log(e);
    console.log(this.state.numbers);
    let prevArr = this.state.numbers;

    for(var i = 0;i<e.length;i++)
    {
      if(e[i].indexOf('-')!=-1)
      {
        console.log(e[i].split('-')[0]);
        var e1 = parseInt(e[i].split('-')[0]);
        var e2 = parseInt(e[i].split('-')[1]);
        prevArr = prevArr.filter(ee => (parseInt(ee) > e2 || parseInt(ee) < e1));
        console.log(prevArr);
      }
      else
      {
        console.log(e[i]);  
        prevArr =  prevArr.filter(ee => ee != e[i]);
      }
    
    }
   
    this.setState({
      numbers : prevArr,
    });

    setTimeout(() => {console.log(this.state.numbers)},1000)

  }

  render()
  {
    return (
      <div className="App">
          <InputHandler delete = {this.delete} />
          <DataBase numbers = {this.state.numbers} addnumber = {this.addnumber} />
      </div>
    );
  } 
 
}

export default App;
