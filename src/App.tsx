import React, { useEffect, useState } from "react";
import "./App.css";

interface iUser {
  name: string;
  email: string;
  phone: string;
  key?: number;
  id?: number;
}

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="App">
      <h2>User Load : {user.length}</h2>
      {user.map((user: iUser) => (
        <User
          name={user.name}
          email={user.email}
          phone={user.phone}
          key={user.id}
          id={user.id}
        ></User>
      ))}
    </div>
  );
}
const User = ({ name, email,id, phone }: iUser) => {
  return (
    <div className="userDetails">
      <p>{id}</p>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{phone}</p>

    </div>
  );
};

export default App;
