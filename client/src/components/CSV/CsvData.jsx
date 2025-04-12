import React from 'react';
import { CSVLink } from 'react-csv';
import { Istoric as IstoricExport } from '../../helper/Istoric';
import CsvIcon from '../../images/csv.svg'



export default function CsvData() {
 // console.log("in CsvData")

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
          className="btn"  
        >
          <img
            src={CsvIcon} // Use the imported SVG file here
            alt='Csv Icon'
            style={{display:'flex',alignItems:'center', width: '20px', height: '20px', fill: 'green', cursor: 'pointer' }} // Note: 'fill' won't work on <img> elements
          />
      </CSVLink>
):(
    <p>No transaction entry</p>
)}
    </div>
  );
}
