import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Navigate, useNavigate } from 'react-router-dom'

function EmployeeApi() {
  let nav=useNavigate()
  let [Apidata, setApidata] = useState()
  function Employeedata() {
    axios.get("http://catodotest.elevadosoftwares.com/Employee/GetAllEmployeeDetails")
      .then(res => {
        console.log(res.data.employeeList)
        setApidata(res.data.employeeList)
      })
  }

  useEffect(() => {
    Employeedata()
  }, [])
  const column = [{
    name: "employeeId",
    selector: row => row.employeeId
  }, {
    name: "employeeName",
    selector: row => row.employeeName
  }, {
    name: "mobile",
    selector: row => row.mobile
  }, {
    name: "userName",
    selector: row => row.userName
  }, {
    name: "password",
    selector: row => row.password
  }, {
    name: "confirmPassword",
    selector: row => row.confirmPassword
  }, {
    name: "Update",
    selector: row => <button type='submit' className='update-btn' onClick={() => updateitems(row.employeeId)}>Update</button>
  }, {
    name: "Delete",
    selector: row => <button type='submit' className='delete-btn' onClick={() => deleteitems(row.employeeId)}>Delete</button>
  }]
  function updateitems(id) {     
    nav(`/Employeeform/${id}`)
  }
  function deleteitems(id) {
    let remark = prompt("please enter the remark")
    if(remark){
    axios.post("http://catodotest.elevadosoftwares.com/Employee/RemoveEmployee",
      {
        employeeId: id,
        removedRemarks: remark,
        createdBy: 1
      }
    )
    alert("deleted")
  }
    Employeedata()
  }
  const customStyles = {
    rows: {
      style: {
        minHeight: '60px',
      },
    },
    headCells: {
      style: {

        fontSize: '12px',
        paddingLeft: '8px',
        paddingRight: '5px',
        textTransform: 'uppercase'
      },
    },
    cells: {
      style: {
        paddingLeft: '20px',
        paddingRight: '5px',
      },
    },
  }


 
  function handleNavigate(){
    nav("/Employeeform")
  }
  return (
    <div>
      <nav className='navbar'>
                <h1 className='navhead'>EMPLOYEE DETAILS</h1>
                <div className='navlink'>
                <a href='/home'>Home</a>
                <a href='/Client'>Client</a>
                <a href='/Category'>Category</a>
                <a href='/Employee'>Employee</a>
                <button className='employee-btn' onClick={handleNavigate} >Add Details</button>
                </div>
            </nav>
      <DataTable
        columns={column}
        data={Apidata}
        customStyles={customStyles}
        highlightOnHover />
    </div>
  )
}

export default EmployeeApi
