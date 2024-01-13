import { useState } from 'react'
export function CreateTodo({username}){
    //react-query
    const [title,setTitle]=useState("");
    const [description,setDes]=useState("");

    return <div className='todo-form'>
        <input className='todo-input' type="text" placeholder="title" onChange={function(e) {
            const value=e.target.value;
            setTitle(value);
        }}></input><br></br>
        <input className='todo-input' type="text" placeholder="description" onChange={function(e) {
            const value=e.target.value;
            setDes(value);
        }}></input>
        
        <button className="todo-button" onClick={()=>{
            fetch("http://localhost:3000/todos",{
                method: "POST",
                body: JSON.stringify({
                    username: username,
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(async function(res){
                const json=await res.json();
            })
        }}>Add a todo</button>
        
        <button className='todo-button' onClick={()=>{
                    const jsonString = JSON.stringify({ 
                        "id": "not required",
                        "username": username,
                        "task": "dall" 
                        });
                    console.log(jsonString.length);
                    fetch("http://localhost:3000/completed",{
                        method: "PUT",
                        body: jsonString,
                        headers: {
                            "Content-type": "application/json",
                            "Content-Length": `${jsonString.length}`                        }
                    })
                }}>Clear All</button>
        
       
    </div>
}