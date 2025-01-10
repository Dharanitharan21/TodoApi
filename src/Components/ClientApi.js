import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

function ClientApi() {
  let [Api, setaApi] = useState();
  function Apidata() {
    axios
      .get("http://catodotest.elevadosoftwares.com//Client/GetAllClientDetails")
      .then((res) => {
        setaApi(res.data.clientList);
        console.log(res.data.clientList);
      });
  }
  useEffect(() => {
    Apidata();
  }, []);
  let [userinput, setuserinput] = useState({
    clientId: 0,
    clientName: "",
    phone: "",
    address: "",
    gst: "",
    website: "",
    email: "",
    contactPerson: "",
    phoneNumber: "",
    createdBy: 1,
  });
  console.log();

  const colunm = [
    {
      name: "clientId",
      selector: (row) => row.clientId,
    },
    {
      name: "clientName",
      selector: (row) => row.clientName,
    },
    {
      name: "phone",
      selector: (row) => row.phone,
    },
    {
      name: "address",
      selector: (row) => row.address,
    },
    {
      name: "gst",
      selector: (row) => row.gst,
    },
    {
      name: "website",
      selector: (row) => row.website,
    },
    {
      name: "email",
      selector: (row) => row.email,
    },
    {
      name: "contactPerson",
      selector: (row) => row.contactPerson,
    },
    {
      name: "phoneNumber",
      selector: (row) => row.phoneNumber,
    },
    {
      name: "createdby",
      selector: (row) => row.createdBy,
    },
    {
      name: "Update",
      selector: (row) => (
        <button
          type="submit"
          className="update-btn"
          onClick={() => Updateitem(row)}
        >
          Update
        </button>
      ),
    },
    {
      name: "Delete",
      selector: (row) => (
        <button
          type="submit"
          className="delete-btn"
          onClick={() => deleteitem(row.clientId)}
        >
          Delete
        </button>
      ),
    },
  ];
  function Updateitem(row) {
    setuserinput({
      clientId: row.clientId,
      clientName: row.clientName,
      phone: row.phone,
      address: row.address,
      gst: row.gst,
      website: row.website,
      email: row.email,
      contactPerson: row.contactPerson,
      phoneNumber: row.phoneNumber,
      createdBy: row.createdBy,
    });
  }
  function deleteitem(id) {
    let remark = prompt("please enter the remark");
    if (remark) {
      axios.post("http://catodotest.elevadosoftwares.com/Client/RemoveClient", {
        clientId: id,
        removedRemarks: remark,
        createdBy: 1,
      });
      alert("deleted");
    }
    Apidata();
  }

  const customStyles = {
    rows: {
      style: {
        minHeight: "40px", // override the row height
      },
    },
    headCells: {
      style: {
        fontSize: "12px",
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "5px",
        textTransform: "uppercase",
      },
    },
    cells: {
      style: {
        paddingLeft: "20px", // override the cell padding for data cells
        paddingRight: "5px",
      },
    },
  };
  function handleChange(e) {
    setuserinput({ ...userinput, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(userinput);
    axios.post(
      "http://catodotest.elevadosoftwares.com/Client/InsertClient",
      userinput
    );
    alert("saved");
    Apidata();
  }
  const [isNavOpen, setIsNavOpen] = useState(false); // State for toggling navbar

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggle navbar
  };
  return (
    <div>
      <nav className="navbar">
        <h1 className="navhead">CLIENT DETAILS</h1>
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
      <div class="container">
        <div className="par"></div>
        <h1 className="word">
          LET'S....-------CHANGE </h1>

        <div className="box">
          <form onSubmit={handleSubmit} className="employee-form">
            <input
              type="text"
              placeholder="Client Name"
              name="clientName"
              value={userinput.clientName}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Phone Number"
              name="phone"
              value={userinput.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={userinput.address}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="GST"
              name="gst"
              value={userinput.gst}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Website"
              name="website"
              value={userinput.website}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={userinput.email}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Contact Person"
              name="contactPerson"
              value={userinput.contactPerson}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Phone Number"
              name="phoneNumber"
              value={userinput.phoneNumber}
              onChange={handleChange}
            />
            <button type="submit" className="Employee-sub-btn">
              Submit
            </button>
          </form>
        </div>
      </div>


      <DataTable
        columns={colunm}
        data={Api}
        customStyles={customStyles}
        pagination
        paginationPerPage={15}
        highlightOnHover
      />
    </div>
  );
}

export default ClientApi;