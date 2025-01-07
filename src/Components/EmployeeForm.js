import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';



function EmployeeForm() {
    let {id}=useParams()
// update the data
    useEffect(()=>{
      if(id){
        axios.get("http://catodotest.elevadosoftwares.com/Employee/GetAllEmployeeDetails")
        .then(res => {
          console.log(res.data.employeeList)
          let output=res.data.employeeList
          let result=output.filter(i =>i.employeeId==id)
          console.log(result)
          setuserinput({
            employeeId: result[0].employeeId,
            employeeName:result[0].employeeName,
            mobile:result[0].mobile,
            userName:result[0].userName,
            password:result[0].password,
            confirmPassword:result[0].confirmPassword,
            createdBy:result[0].createdBy
          })
        })
      }
     

    },[id])
    
    let [userinput, setuserinput] = useState({
        employeeId: null,
        employeeName: "",
        mobile: "",
        userName: "",
        password: "",
        confirmPassword: "",
        createdBy: 0,
        deviceId: "",
      })
      function handleinput(e) {
        setuserinput({ ...userinput, [e.target.name]: e.target.value })
      }
    
      function handleSubmit(e) {
        console.log(userinput);
        e.preventDefault()
        axios.post("http://catodotest.elevadosoftwares.com/Employee/InsertEmployee", userinput)
        alert("saved")
      }
  return (
    <div>
         <nav className='navbar'>
                <h1 className='navhead'>ADD EMPLOYEE DETAILS</h1>
                <div className='navlink'>
                <a href='/home'>Home</a>
                <a href='/Employee'>Employee</a>
                </div>
            </nav>
       <div>
        <form onSubmit={handleSubmit} className='employee-form'>
          <input type='taxt' placeholder='Employee Name' name='employeeName' value={userinput.employeeName} onChange={handleinput} />
          <input type='number' placeholder='Phone Number' name='mobile' value={userinput.mobile} onChange={handleinput} />
          <input type='taxt' placeholder='User Name' name='userName' value={userinput.userName} onChange={handleinput} />
          <input type='taxt' placeholder='Pasword' name='password' value={userinput.password} onChange={handleinput} />
          <input type='taxt' placeholder='Confirm Password' name='confirmPassword' value={userinput.confirmPassword} onChange={handleinput} />
          <button type='Submit' className='Employee-sub-btn'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default EmployeeForm
