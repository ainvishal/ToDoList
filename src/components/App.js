import { useState } from "react";
import { TodoData } from "./data";


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
      <label htmlFor="item">
        <input type='text' value={name} onChange={e => setname(e.target.value)} />
        <button onClick={handleClick}>Add to List</button>
      </label>
      <div>
        {TodoList.map(item => {
          if(Editstate && item.id === EditId){
            return(
              <p key={item.id}>
                <input type="text" value={Editname} onChange={e => {setename(e.target.value);}}/>
                <button onClick={() => {item.text = Editname;handleSave()}}>Save</button>
              </p>
            );
          }
          else{
          return(
            <p key={item.id}>{item.text}<button onClick={() => handleEdit(item.id)}>Edit</button><button onClick={() => handleDel(item.id)}>Delete</button></p>
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

