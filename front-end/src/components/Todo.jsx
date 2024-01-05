import { useState } from 'react'


export function Todos({todos}){

    return <div>
        {todos.map(function(todo){
            return <div className="task-container">
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={()=>{
                    const jsonString = JSON.stringify({ "id": todo._id });
                    fetch("http://localhost:3000/completed",{
                        method: "PUT",
                        body: jsonString,
                        headers: {
                            "Content-type": "application/json",
                            "Content-Length": `${jsonString.length}`
                        }
                    }).then(() => {
                        alert("done");
                    });
                }}>{todo.completed == true ? "Completed" : "Mark as Completed"}</button>
            </div>
        })}
    </div>
}

// fetch("http://localhost:3000/completed",{
//                     method: "PUT",
//                     body: JSON.stringify({
//                         "id": todo._id
//                     }),
//                     header: {
//                         "Content-type":"application/json" 
//                     }
//                 }).then(async function(res){
//                 const json=await res.json();
//                 alert("Marked as done");
//             })
