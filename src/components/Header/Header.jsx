import './Header.css'

// eslint-disable-next-line react/prop-types
const Header = ({search, handleChange1, filter, handleChange2, sort, handleChange3}) => {
console.log(search);
console.log(filter);
console.log(sort);
  return (
    <div>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "6px"}}>
        <label htmlFor="search">Search:</label>
        <input type="search" id="search" value={search} onChange={handleChange1} />
        </div> <br />

        <div style={{display: "flex", justifyContent: "center", gap: "30px", marginTop: "20px"}}>
        <div style={{display: "flex", gap: "6px"}}>
        <label htmlFor="filter">Filter By City:</label>
        <select name="filter" id="filter" onChange={handleChange2}>
            <option value="defaultf">Default</option>
            <option value="Gwenborough">Gwenborough</option>
            <option value="Wisokyburgh">Wisokyburgh</option>
        </select>
        </div>
        <div style={{display: "flex", gap: "6px"}}>
        <label htmlFor="sort">Sort By Name:</label>
        <select name="sort" id="sort" onChange={handleChange3}>
            <option value="defaults">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
        </select>
        </div>
        </div>
    </div>
  )
}

export default Header