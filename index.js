import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const App = () => {
  const [rowData, setRowData] = useState([
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Что', model: 'Ns', price: 40000, data: '24.01.2010' },
  ]);

  const [columnDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'data' },
  ]);

  const addRow = () => {
    setRowData([...rowData, { make: 'Что'}]);
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
      <button onClick={addRow}>добавить</button>
    </div>
  );
};

render(<App />, document.getElementById('root'));
