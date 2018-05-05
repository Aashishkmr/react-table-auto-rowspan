import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TableRowspan from '../lib/components/table';
import authors from './authors'

class App extends Component {
  constructor(props,context){
    super(props,context);
    this.state={
      tData:authors
    }
  }
  render() {
    let columns=
      [
        {
          header:'Id',
          sort:'true'
        },
        {
          header:'First Name',
          sort:'true'
        },
        {
          header:'Last Name',
          sort:'true'
        }
      ]
  
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <div  style={{width:'600px',marginTop:'10px'}}>
      <TableRowspan 
      tData={Object.assign([],this.state.tData)} 
      tColumns={columns}
      />
      </div>
    </div>);
  }
}

export default App;
