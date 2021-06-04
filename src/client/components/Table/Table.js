import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import './Table.css'

function MyTable(props) {
  const { headers, body } = props

  const tableHeaders = headers.map((header, i) => {
    return <th key={i}>{header}</th>
  })
  const tableBody = body.map((obj, i) => {
    return (
      <tr key={i}>
        {Object.values(obj).map((value, i) => <td key={i}>{value}</td>)}
      </tr>
    )
  })

  return (
    <Table size="sm">
      <thead>
        <tr>
          {tableHeaders}
        </tr>
      </thead>
      <tbody>
        {tableBody}
      </tbody>
    </Table >
  )
}

export default MyTable;