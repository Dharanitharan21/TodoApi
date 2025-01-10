import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    let nav = useNavigate();
    let [userinput, setuserinput] = useState({
        name: "",
        pwd: "",
    });

    function handleinput(e) {
        setuserinput({ ...userinput, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("http://92.205.109.210:8070/api/login", userinput)
            .then(response => {
                console.log(response);
                alert("Logged in successfully");
                
               
                sessionStorage.setItem("username", userinput.name);
                nav('/home');
            })
            .catch(error => {
                console.error("Login error:", error);
                alert("Failed to login. Please check your credentials.");
            });
    }

    return (
        <div>
            <h1 className='word2'>TO DO TODAY</h1>
            <form onSubmit={handleSubmit} className='employee-form'>
                <h2>Login</h2>
                <input 
                    type='text' 
                    placeholder='Name' 
                    name='name' 
                    value={userinput.name} 
                    onChange={handleinput} 
                />
                <input 
                    type='password' 
                    placeholder='Password' 
                    name='pwd' 
                    value={userinput.pwd} 
                    onChange={handleinput} 
                />
                <a className='signup' href='/signup'>Signup</a>
                <button type='Submit' className='Employee-sub-btn'>Submit</button>
            </form>
        </div>
    );
}

export default Login;
