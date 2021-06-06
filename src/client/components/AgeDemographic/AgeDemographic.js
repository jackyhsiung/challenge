import React, { useState, useEffect } from 'react'
import MyTable from '../Table/Table'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from 'axios'
import './AgeDemographic.css'
import "bootstrap/dist/css/bootstrap.css";


function AgeDemographic(props) {
  const [ageCount, setAgeCount] = useState([])
  const [items, setItems] = useState([])
  const [curItem, setCurItem] = useState('')
  useEffect(() => {
    axios.get('http://localhost:3000/users/age', {
      params: {
        itemToLookup: curItem
      }
    })
      .then(response => {
        if (response.data instanceof Array) {
          setAgeCount(response.data)
        }
      })
  }, [curItem])

  useEffect(() => {
    axios.get('http://localhost:3000/items')
      .then(response => {
        if (response.data instanceof Array) {
          setItems(response.data)
        }
      })
  }, [])

  const handleSelect = (event) => {
    setCurItem(event)
  }

  const dropdownItems = items.map((item, i) => {
    return <Dropdown.Item key={i} eventKey={item}>{item}</Dropdown.Item>
  })

  return (
    <div className='age-demographic'>
      <h1 className='age-demographic__title'>Age Demographic With Item ___</h1>
      <DropdownButton id="dropdown-basic-button" title="Items" onSelect={handleSelect}>
        {dropdownItems}
      </DropdownButton>
      <MyTable headers={['Age', 'Count']} body={ageCount} />
    </div>
  )

}

export default AgeDemographic;