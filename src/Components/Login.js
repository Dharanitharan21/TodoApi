import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    let nav=useNavigate()
    let [userinput,setuserinput]=useState({
        name:"",
        pwd:"",
    })
    function handleinput(e){
       setuserinput({...userinput,[e.target.name]:e.target.value})
    }
    function handleSubmit(e){
       e.preventDefault()
       axios.post("http://92.205.109.210:8070/api/signup",userinput)
       alert("Loging In")
       nav("/home")
    }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className='employee-form'>
          <h2>Login</h2>
          <input type='text' placeholder='Name' name='name' value={userinput.name} onChange={handleinput} />
          <input type='password' placeholder='Password' name='pwd' value={userinput.pwd} onChange={handleinput} />
          <a className='signup' href='/signup'>signup</a>
          <button type='Submit' className='Employee-sub-btn'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login
