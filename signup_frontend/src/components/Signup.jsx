import {useState} from 'react'

export function Signup(){
    const [username,Setuser]=useState('');
    const [code,Setcode]=useState('');

    return <div>
        <input type="email" placeholder="username" onChange={(e)=>{
            const value=e.target.value;
            Setuser(value);
        }}></input>
        <input type="password" placeholder="password" onChange={(e)=>{
            const value=e.target.value;
            Setcode(value);
        }}></input>
        <button onClick={async ()=>{
           const response=await fetch("http://localhost:3000/signup",{
            method:"POST",
            body: JSON.stringify({
                "username": username,
                "password": code
            }),
            headers: {
                    "Content-type": "application/json"
                    },
           });
           const data=await response.json();
           console.log(data.msg);
           if(data.msg=="signup successful"){
                alert("signup succsessful");
                window.location.assign("http://localhost:5173/");
           }
           else{
            alert("user already exists");
           }
        }}>Submit</button>        
    </div>
}