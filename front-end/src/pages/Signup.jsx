import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import axios from 'axios';

export function Signup(){
    const navigate= useNavigate();
    const [username,Setuser]=useState('');
    const [code,Setcode]=useState('');

    return <div>
        <h1>Sign-up</h1>
       
        <input className='input' type="email" placeholder="username" onChange={(e)=>{
            const value=e.target.value;
            Setuser(value);
        }}></input><br></br><br></br>
        <input className='input' type="password" placeholder="password" onChange={(e)=>{
            const value=e.target.value;
            Setcode(value);
        }}></input><br></br><br></br>
        <button onClick={async ()=>{
            try{
                const response= await axios.post("http://localhost:3000/signup",{
            
                    username: username,
                    password: code

            })
           const data=await response.data;
           console.log(response.status);
           console.log(data.msg);
           if(data.msg=="signup successful"){
                alert("signup succsessful");
                navigate('/signin'); 
           }
           else{
            alert("user already exists");
           }
            }catch(err){
                const status=err.response.status;
                if(status==411){
                    alert("Invalid Credentials");
                }
                else if(status==409){
                    alert("User Already Exists");
                }
                else{
                    alert("Something Went Wrong");
                }
            }
            
        }}>Submit</button>        
    </div>
}