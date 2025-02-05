import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
        <input type="search" />
        <button>search</button>

        <select name="filter" id="filter">
            <option value="seher1">seher1</option>
            <option value="seher2">seher2</option>
        </select>

        <select name="sort" id="sort">
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
        </select>
    </div>
  )
}

export default Header