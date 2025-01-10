import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signin() {
    let [userinput, setuserinput] = useState({
        name: "",
        pwd: "",
        gender: "",
        mail: ""
    });
    let nav = useNavigate();  

    function handleinput(e) {
        setuserinput({ ...userinput, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("http://92.205.109.210:8070/api/signup", userinput)
            .then(response => {
                console.log(response);
                alert("Successfully Registered");
                nav("/login");  
            })
            .catch(error => {
                console.error("Signup error:", error);
                alert("Failed to register. Please try again.");
            });
    }

    return (
        <div>
            <h1 className='word2'>TO DO TODAY</h1>

            <form onSubmit={handleSubmit} className='employee-form'>
                <h2>Signup</h2>
                <input type='text' placeholder='Name' name='name' value={userinput.name} onChange={handleinput} />
                <input type='password' placeholder='Password' name='pwd' value={userinput.pwd} onChange={handleinput} />
                <input type='text' placeholder='Gender' name='gender' value={userinput.gender} onChange={handleinput} />
                <input type='email' placeholder='Email' name='mail' value={userinput.mail} onChange={handleinput} />
                <button type='Submit' className='Employee-sub-btn'>Submit</button>
            </form>
        </div>
    );
}

export default Signin;
