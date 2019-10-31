import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import './index.scss';

const gridOptions = {
  defaultColDef: {
    resizable: true
  }
};

const columnDefs = [{
  headerName: "Expense",
  field: "expenseName"
}, {
  headerName: "People",
  // https://www.ag-grid.com/javascript-grid-value-getters/
  valueGetter: (params) => params.data.people.map(person => person.name).join(', ')
}, {
  headerName: "Total Amount",
  field: "amount"
}, {
  headerName: "Amount per Person",
  valueGetter: (params) => params.data.amount / params.data.people.length
}];

// Expected Payload:
/*
 {
   "expenseName": "Name of expense",
   "people": [ { "id", "name" } ]
   "amount": 123
 }
 */

function Grid({ data }) {
  return (
    <div
      className="ag-theme-balham Grid"
    >
      <AgGridReact
        gridOptions={gridOptions}
        columnDefs={columnDefs}
        rowData={data}>
      </AgGridReact>
    </div>
  )
}

export default Grid;
