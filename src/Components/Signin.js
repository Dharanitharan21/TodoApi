import axios from 'axios'
import React, { useState } from 'react'

function Signin() {
  let [userinput,setuserinput]=useState({
      name:"",
      pwd:"",
      gender:"",
      mail:""
  })
  function handleinput(e){
     setuserinput({...userinput,[e.target.name]:e.target.value})
  }
  function handleSubmit(e){
     e.preventDefault()
     axios.post("http://92.205.109.210:8070/api/signup",userinput)
     alert("Successfully Register")
  }
  return (
    <div>
       <div>
        <form onSubmit={handleSubmit} className='employee-form'>
          <h2>Signup</h2>
          <input type='text' placeholder='Name' name='name' value={userinput.name} onChange={handleinput} />
          <input type='password' placeholder='Password' name='pwd' value={userinput.pwd} onChange={handleinput} />
          <input type='text' placeholder='Gender' name='gender' value={userinput.gender} onChange={handleinput} />
          <input type='email' placeholder='Email' name='mail' value={userinput.mail} onChange={handleinput} />
          <button type='Submit' className='Employee-sub-btn'>Submit</button>
        </form>
      </div>
    </div>
  )
}
export default Signin
