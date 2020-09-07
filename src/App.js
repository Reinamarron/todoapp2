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
  description: "your description",
  completed: false
},
{
  id: 2,
  title: "Buy flowers",
  description: "your description",
  completed: true
},
{
  id: 3,
  title: "Pick up drycleaning",
  description: "your description",
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
              <li key={todoItem.id}><input checked={todoItem.completed} type="checkbox"/>{todoItem.title}</li>
            )
          })}
         
        </ul>
      
    </div>
  );
}

export default App;


