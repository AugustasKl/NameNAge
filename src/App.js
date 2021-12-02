import React, { useState } from 'react';
import NewUser from '../src/components/NewUser/NewUser'
import Users from './components/Users/Users';



function App() {
const [user, setUser]=useState([])
  const addUserHandler=(users)=>{
    setUser((prevUsers)=>{
     return [users, ...prevUsers]
    })
  }
  console.log(user);
  return (
    <div>
    <NewUser onAddUser={addUserHandler}/>
    <Users data={user}/>
    </div>
  );
}

export default App;
