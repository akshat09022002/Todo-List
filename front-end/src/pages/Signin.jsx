import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Signin.css"


export function Signin(){
    const [username,setuser]= useState("");
    const [password,setpass]= useState("");
    const navigate=useNavigate();

    return(
        <div>
            <h1>Todo List</h1>
            <input className="input" type="email" onChange={(e)=>{
                const value=e.target.value;
                setuser(value);
            }} placeholder="username"></input><br></br><br></br>
            <input className='input' type="password" onChange={(e)=>{
                const value=e.target.value;
                setpass(value);
            }} placeholder="password"></input><br></br><br></br>
            <button  onClick={async function(){
                const response = await fetch('http://localhost:3000/signin',{
                    method : "POST",
                    body: JSON.stringify({
                        "username":username,
                        "password":password
                    }),
                    headers: {
                    "Content-type": "application/json"
                    }
                })
                const data=await response.json();
                if(data.msg=="access granted"){
                    navigate(`/home?username=${username}`);   
                }
                else{
                    alert('rejected');
                }

            }}><span>Login</span></button><span>    </span>
            <button onClick={()=>{
                window.location.assign("http://localhost:5175/");
            }}>Sign up</button>
        </div>
    )

}