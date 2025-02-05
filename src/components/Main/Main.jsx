import React, { useEffect, useState } from 'react'
import './Main.css'
import Card from '../Card/Card';

const Main = () => {
const [users, setUsers] = useState([]);
const [posts, setPosts] = useState([]);
useEffect(()=>{
 fetch("https://jsonplaceholder.typicode.com/users")
 .then(res => res.json())
 .then(data => setUsers(data));
 console.log(users);
 
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data2 => setPosts(data2));
    console.log(posts);
},[])

  return (
    <div className='container'>
        {users.map((user) => {
            return <Card key = {user.id} name={user.name} />
        })}
    </div>
  )
}

export default Main