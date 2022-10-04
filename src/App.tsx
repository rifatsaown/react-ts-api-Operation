import React, { useEffect, useState } from 'react';
import './App.css';
interface iUser{
  name: string;
  email: string;
  username: string;
  phone: string;
  key?: number;
  id?: number;
}

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  
  return (
    <div className="App">
    <h1>Users Loaded : {users.length}</h1>
    {
      users.map((user:iUser) => <User key={user.id} name={user.name} email={user.email} username={user.username} phone={user.phone}></User>)
    }
    </div>
  );
}

function User({name, email, username, phone}:iUser) {
  return (
    <>
    <h3>Name : {name}</h3>
    <h4>Email : {email}</h4>
    <h4>Username : {username}</h4>
    <h4>Phone : {phone}</h4>
    </>
  )
}

export default App;
