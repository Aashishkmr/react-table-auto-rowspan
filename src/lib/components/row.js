import React from 'react';
import TableColumn from './col';


    const Row=({rData})=>{
    return(
      <tr className='ar-table-row'>
      {rData.map(colData=>
        <TableColumn colData={colData}/>
      )}
   </tr>
 );
}

export default Row;
