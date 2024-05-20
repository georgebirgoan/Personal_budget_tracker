import React from 'react';
import { CSVLink } from 'react-csv';
import { Istoric as IstoricExport } from '../../helper/Istoric';
import CsvIcon from '../../images/csvIcon5.png'
export default function CsvData() {
  // Use IstoricExport to get the full transaction history
  const history = IstoricExport();

  // Define CSV headers
  const headers = [
    { label: 'Date', key: 'date' },
    { label: 'Type', key: 'type' },
    { label: 'Category', key: 'category' },
    { label: 'Amount', key: 'amount' },
    { label: 'Option', key: 'option' },
    { label: 'Reference', key: 'reference' },
  ];

  return (
    <div>
        { history ? (
      <CSVLink
        data={history}
        headers={headers}
        filename={'full_transaction_data.csv'}
        className="btn btn-primary"
      >
        <img src={CsvIcon}  alt='CsvIcon'/>
        
      </CSVLink>
):(
    <p>No transaction entry</p>
)}
    </div>
  );
}
