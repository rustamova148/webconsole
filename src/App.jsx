import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useState } from "react";

function App() {
const [search, setSearch] = useState("");
const [filter, setFilter] = useState("defaultf");
const [sort, setSort] = useState("defaults");

const handleChange1 = (e) => {
  setSearch(e.target.value);
}
const handleChange2 = (e) => {
  setFilter(e.target.value);
}
const handleChange3 = (e) => {
  setSort(e.target.value);
}

  return (
    <div className="app">
      <Header search={search} handleChange1={handleChange1} 
      filter={filter} handleChange2={handleChange2}
      sort={sort} handleChange3={handleChange3} />
      <Main search={search} filter={filter} sort={sort} />
    </div>
  );
}

export default App;
