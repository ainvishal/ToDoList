import { useState } from "react";
import { TodoData } from "./data";
import './index.css'

let nextId = 4;

function ToDo(){
  const [TodoList, setList] = useState(TodoData);
  const [name, setname] = useState('')

  function handleClick(e){
    e.preventDefault();
    const newList = [
      ...TodoList,
      {
        id:nextId,
        text:name
      }
    ];
    setList(newList);
    setname('');
    nextId++;
  }

  function handleDel(index){
    const upList = TodoList.filter(item => index !== item.id);
    setList(upList);
    nextId--;
  }

  return(
    <>
      <label htmlFor="item">
        <input type='text' value={name} onChange={e => setname(e.target.value)} />
        <button onClick={handleClick}>Add to List</button>
      </label>
      <div>
        {TodoList.map(item => {
          return(
            <p key={item.id}>{item.text}<button onClick={() => handleDel(item.id)}>Delete</button></p>
          )
        })}
      </div>
    </>
  );
}

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


