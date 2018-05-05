import React, {Component} from 'react';


class TableColumn extends Component{
  render(){
    return(
    (this.props.colData.print==true) &&
        <td rowSpan={this.props.colData.rowspan}>{this.props.colData.value}</td>

    );
  }
}

export default TableColumn;
