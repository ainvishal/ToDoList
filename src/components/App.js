import React from 'react'
import './index.css'
import ToDo from './ToDo.js'


function List(){
  return(
    <>
    <div className="label">
      <h2>To Do List</h2>
    </div>
    <div className="content">
      <ToDo/>
    </div>
  </>
  );
}

export default function App(){
  return(
    <List/>
  );
}


