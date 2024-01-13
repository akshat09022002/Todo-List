import { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';


export function Todos({todos}){

    return <div>
        {todos.map(function(todo){
            return <div className={todo.completed ? 'todo-row complete' : 'todo-row'}>
                <div className='todo-container' onClick={()=>{
                    const jsonString = JSON.stringify({ 
                        "id": todo._id,
                        "username" : "not required",
                         "task": "update"
                        });
                    fetch("http://localhost:3000/completed",{
                        method: "PUT",
                        body: jsonString,
                        headers: {
                            "Content-type": "application/json",
                            "Content-Length": `${jsonString.length}`
                        }
                    })
                }}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                </div>
                <div className='icons'>
                    <RiCloseCircleLine className='icon_element' onClick={()=>{
                    const jsonString = JSON.stringify({ 
                        "id": todo._id,
                        "username" : "not required",
                        "task": "delete" 
                        });
                    fetch("http://localhost:3000/completed",{
                        method: "PUT",
                        body: jsonString,
                        headers: {
                            "Content-type": "application/json",
                            "Content-Length": `${jsonString.length}`
                        }
                    })
                }}></RiCloseCircleLine>
                    <TiEdit className='icon_element'></TiEdit>   
                </div>
            </div>
        })}
    </div>
}