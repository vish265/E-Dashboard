import React,{useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const SignUp = ()=>{
      
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
     {/* if user is registered he wont able to see the signup option on nav bar */} 
    useEffect(()=>{
      const auth = localStorage.getItem("user");
      if(auth){
        navigate('/');
      }
    })
    const CollectData = async ()=>{
        console.log(name,email, password);
         {/* API connection */} 
        let result = await fetch("http://localhost:5000/signup",{
             method:'post',
             body:JSON.stringify({name,email,password}),
             headers:{
              'Content-Type':'application/json'
             }
        })  

        result = await result.json();
        console.log(result);
         {/* to store the user information in localstorage*/} 
        localStorage.setItem("user",JSON.stringify(result));
         {/*if user registered he will redirect to home page and wont come again on signup page */} 
        if(result){
          navigate('/');
        }
    }
    
      return(
        <div className='register'>
            <h1>Register</h1>
            <input type="text" className='inputBox' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/>
            <input type="text" className='inputBox'  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
            <input type="password" className='inputBox'  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/>
            <button type='button' onClick={CollectData} className='inputButton'>SingUp</button>
        </div>
        

        
      )
}

export default SignUp;