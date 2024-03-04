import React, { useState } from 'react';

const CSVParser = () => {
  const [csvData, setCsvData] = useState([]);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const text = event.target.result;
      const data = parseCSV(text); // Parse CSV data
      setCsvData(data); // Set parsed data to state
    };

    reader.readAsText(file);
  };

  const parseCSV = (csvText) => {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',').map(header => header.trim());
    const data = [];

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');
      const rowData = {};
      for (let j = 0; j < headers.length; j++) {
        rowData[headers[j]] = values[j].trim();
      }
      data.push(rowData);
    }

    return data;
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileInputChange} />
      <table>
        <thead>
          <tr>
            {csvData.length > 0 && Object.keys(csvData[0]).map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {csvData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CSVParser;
