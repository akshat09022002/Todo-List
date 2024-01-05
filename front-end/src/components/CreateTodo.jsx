import { useState } from 'react'
export function CreateTodo(){
    //react-query
    const [title,setTitle]=useState("");
    const [description,setDes]=useState("");

    return <div className="container">
        <input  type="text" placeholder="title" onChange={function(e) {
            const value=e.target.value;
            setTitle(value);
        }}></input><br></br>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" onChange={function(e) {
            const value=e.target.value;
            setDes(value);
        }}></input><br></br>

        <button style={{
            padding: 10,
            margin: 10
        }}  className="button-task"onClick={()=>{
            fetch("http://localhost:3000/todos",{
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(async function(res){
                const json=await res.json();
                alert("Todo added");
            })
        }}>Add a todo</button><br></br>
    </div>
}
