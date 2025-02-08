/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import './Main.css'
import Card from '../Card/Card';

const Main = ({search, filter, sort}) => {
const [combinedData, setCombinedData] = useState([]);
const  [filteredData, setFilteredData] = useState([]);

useEffect(()=>{
  async function showDatas() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let usersData = await response.json();


    let response2 = await fetch("https://jsonplaceholder.typicode.com/posts");
    let postsData = await response2.json();
    

    let combinedDatas  = usersData.map(u => {
      let usersPosts = postsData.filter(p => u.id === p.userId );
      return {
        ...u,
        posts: usersPosts,
      };
    });

    setCombinedData(combinedDatas);
  }

  showDatas();
},[])

useEffect(() => {
  let copydata = [...combinedData];

  copydata = copydata.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  if(filter === "Gwenborough"){
    copydata = copydata.filter(c => c.address.city === "Gwenborough");
  }else if(filter === "Wisokyburgh"){
    copydata = copydata.filter(c => c.address.city === "Wisokyburgh");
  }

  if(sort === "A-Z"){
    copydata = copydata.sort((a, b) => a.name.localeCompare(b.name));
  }else if(sort === "Z-A"){
    copydata = copydata.sort((a, b) => b.name.localeCompare(a.name));
  }

  setFilteredData(copydata);
},[combinedData, search, filter, sort])


  return (
    <div className='container'>
        {filteredData.map((c) => {
            return <Card key = {c.id} name = {c.name}
            city = {c.address.city} posts={c.posts.map(p => p.title).join(", ")} />
        })}
    </div>
  )
}

export default Main