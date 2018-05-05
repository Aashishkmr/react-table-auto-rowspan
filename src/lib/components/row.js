import React from 'react';
import TableColumn from './col';


    const Row=({rData})=>{
    return(
      <tr>
      {rData.map(colData=>
        <TableColumn colData={colData}/>
      )}
   </tr>
 );
}

export default Row;
