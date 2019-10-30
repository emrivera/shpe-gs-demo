import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import './index.scss';
// Expected Payload:
/*
 {
   "expense": "Name of expense",
   "people": [ "string", "string" ]
   "total": 123
 }
 */

const columnDefs = [{
  headerName: "Expense",
  field: "expense"
}, {
  headerName: "People",
  // https://www.ag-grid.com/javascript-grid-value-getters/
  valueGetter: (params) => params.data.people.join(', ')
}, {
  headerName: "Total",
  field: "total"
}, {
  headerName: "Total per Person",
  valueGetter: (params) => params.data.total / params.data.people.length
}];

function Grid({ data }) {
  return (
    <div
      className="ag-theme-balham Grid"
    >
      <AgGridReact
        columnDefs={columnDefs}
        rowData={data}>
      </AgGridReact>
    </div>
  )
}

export default Grid;
