import { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// const navigateTo = useNavigate();

export function Signin(){
    const [username,setuser]= useState("");
    const [password,setpass]= useState("");

    return(
        <div>
            <input onChange={(e)=>{
                const value=e.target.value;
                setuser(value);
            }} placeholder="username"></input><br></br><br></br>
            <input onChange={(e)=>{
                const value=e.target.value;
                setpass(value);
            }} placeholder="password"></input><br></br><br></br>
            <button onClick={async function(){
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
                console.log(data)
                if(data.msg=="access granted"){
                    window.location.assign(`http://localhost:5174?username=${username}`);
                }
                else{
                    alert('rejected');
                }

            }}>Login</button>
        </div>
    )

}