import { useState } from "react";
import { TodoData } from "./data";
import './index.css'


let nextId = 4;

function ToDo(){
  const [TodoList, setList] = useState(TodoData);
  const [name, setname] = useState('');
  const [Editstate, setedit] = useState(false);
  const [EditId, setId] = useState(0);
  const [Editname, setename] = useState('');

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

  function handleEdit(index){
    setedit(true);
    setId(index);
  }

  function handleSave(){
    setedit(false);
    setId(0);
    setename('');
  }

  return(
    <>
      <label htmlFor="item" className="m-2">
        <input type='text' className=" border border-black mx-2 w-64" value={name} onChange={e => setname(e.target.value)} />
        <button className="mx-2 bg-blue-400 text-violet-700 rounded-md w-24" onClick={handleClick}>Add to List</button>
      </label>
      <div className="p-2 my-5">
        {TodoList.map(item => {
          if(Editstate && item.id === EditId){
            return(
              <p key={item.id}>
                <input type="text" className="border border-black" value={Editname} onChange={e => {setename(e.target.value);}}/>
                <button onClick={() => {item.text = Editname;handleSave()}}>Save</button>
              </p>
            );
          }
          else{
          return(
            <p key={item.id} className="m-1 p-1 ">{item.text}<button onClick={() => handleEdit(item.id)} className="mx-1 bg-blue-400 text-violet-700 rounded-md">Edit</button><button onClick={() => handleDel(item.id)} className="mx-1 bg-blue-400 text-violet-700 rounded-md">Delete</button></p>
          )
          }
        })}
      </div>
    </>
  );
}

function List(){
  return(
    <>
    <div className="text-center p-4 m-7 tracking-wide">
      <h2>To Do List</h2>
    </div>
    <div className="text-center p-2 m-5">
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

