import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TableRowspan from './components/table';
import authors from './testdata/authors'

class App extends Component {
  constructor(props,context){
    super(props,context);
    this.state={
      tData:authors
    }
  }
  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <TableRowspan tData={Object.assign([],this.state.tData)} />
    </div>);
  }
}

export default App;
