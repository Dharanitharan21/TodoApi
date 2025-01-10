import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'

function CategoryApi() {
    let [datas, setdatas] = useState()
    function getdata() {
        axios.get('http://catodotest.elevadosoftwares.com/Category/GetAllCategories')
            .then(res => {
                console.log(res.data.categoryList)
                setdatas(res.data.categoryList)
            })
    }
    useEffect(() => {
        getdata()
    }, [])

    let [userinput, setuserinput] = useState({
        categoryId: 0,
        category: "",
        description: "",
        createdBy: 1
    })
    
    const column = [{
        name: "categoryId",
        selector: row => row.categoryId,
        sortable: true
    },
    {
        name: "category",
        selector: row => row.category
    }, {
        name: "description",
        selector: row => row.description
    }, {
        name: "Update",
        selector: row => <button type='submit'className='update-btn' onClick={() => updateitems(row)}>Update</button>
    }, {
        name: "delete",
        selector: row => <button type='submit' className='delete-btn' onClick={() => deleteitems(row.categoryId)}>Delete</button>
    }
    ]

    function updateitems(row) {
        console.log(row);
        setuserinput({
            categoryId: row.categoryId,
            description: row.description,
            category: row.category,
            createdBy: row.createdBy
        })

    }
    function deleteitems(id) {
        let remark = prompt("please enter the remarks")
        if(remark){
        axios.post("http://catodotest.elevadosoftwares.com/Category/RemoveCategory",{
            categoryId: id,
            removedRemarks: remark,
            createdBy: 1
        })
        alert("deleted")
    }
        getdata()
    }

    function handleinput(e) {
        setuserinput({ ...userinput, [e.target.name]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log(userinput);
        axios.post("http://catodotest.elevadosoftwares.com/Category/InsertCategory", userinput)
        alert("saved")
        getdata()
    }
    
    const customStyles = {
        rows: {
            style: {
                minHeight: '40px', 
            },
        },
        headCells: {
            style: {

                fontSize: '20px',
                paddingLeft: '8px',
                paddingRight: '8px',
                textTransform: 'uppercase'
            },
        },
        cells: {
            style: {
                paddingLeft: '20px', 
                paddingRight: '8px',
            },
        },
    };
    const [isNavOpen, setIsNavOpen] = useState(false); // State for toggling navbar
    
      const toggleNav = () => {
        setIsNavOpen(!isNavOpen); // Toggle navbar
      };
    return (
        <div>
            <nav className='navbar'>
                <h1 className='navhead'>CATEGORY DETAILS</h1>
                <button className='hamburger' onClick={toggleNav}>☰</button>
                <div className={`navlink ${isNavOpen ? 'active' : ''}`}>
                <Link to={'/home'}>
                <button className='a'>Home</button></Link>
                <Link to={'/Client'}>
                <button className='a' href='/Client'>Client</button></Link>
                <Link to={'/Category'}><button className='a'>Category</button></Link>
                <Link to={'/Employee'}><button className='a'>Employee</button></Link>
                </div>
            </nav>
            <form onSubmit={handleSubmit} className='employee-form'>
                <input type='text' name='category' placeholder='Category' value={userinput.category} onChange={handleinput} />
                <input type='text' name='description' placeholder='Description' value={userinput.description} onChange={handleinput} />
                <button type='submit' className='Employee-sub-btn'>submit</button>
            </form>
            <DataTable
                columns={column}
                data={datas}
                customStyles={customStyles}
                pagination
                paginationPerPage={15}
                highlightOnHover
            />
        </div>
    )
}

export default CategoryApi
