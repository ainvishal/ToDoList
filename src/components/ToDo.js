import React,{useState} from 'react'
import {TodoData} from './data'

let nextId = 3;

function Label({insertList}){
    const [name, setname] = useState('');
    return(
        <label>
            <input type='text' value={name} onChange={e => setname(e.target.value)}/>
            <button onClick={insertList(name)}>Add</button>
        </label>
    );
}

export default function ToDo(){
    const [TodoList, setTodo] = useState(TodoData);

    function handleInsert(text){
        const newList = [
            ...TodoList,
            {
                id:nextId++,
                text:text
            }
        ];
        setTodo(newList);
    }

    return(
        <>
            <Label insertList={handleInsert}/>
        </>
    );
}
