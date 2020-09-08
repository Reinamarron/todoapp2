import React from 'react';

import './App.css';
import avatar from './X462YQ4HIJEGHHX2I3LXRV4G7A.jpg';

const profile = { 
  userName: "Reina",
  avatar: avatar,
};

const todoList = [{
  id: 1,
  title: "Buy groceries",
  description: "party trays",
  completed: false
},
{
  id: 2,
  title: "Buy flowers",
  description: "red tulips",
  completed: true
},
{
  id: 3,
  title: "Pick up drycleaning",
  description: "dresses",
  completed: false
}];
function App() {
  return (   
      <div> 
    <nav>
      <img alt="avatar" src={profile.avatar}/>
    <h1>{profile.userName}</h1>
    </nav>
        <h5>Get set, get done</h5>
        <ul>
          {todoList.map((todoItem)=>{
            return (
              <li key={todoItem.id}><input defaultChecked={todoItem.completed} type="checkbox"/>{todoItem.title}</li>
            )
          })}
         
        </ul>
      
    </div>
  );
}

const listItemStyles = {
  title:"Buy Groceries", 
  description:"party trays",
  
}





export default App;



