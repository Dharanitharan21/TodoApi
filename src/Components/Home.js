import React, { useEffect, useState } from 'react';

function Home() {
    const [name, setName] = useState("USERNAME");

    useEffect(() => {
        // Retrieve the username from sessionStorage
        const storedName = sessionStorage.getItem("username");
        if (storedName) {
            setName(storedName.toUpperCase()); // Convert to uppercase if a username exists
        }
    }, []); // Runs once on component mount

    return (
        <div>
            <nav className='navbar'>
                <h1 className='navhead'>{name}</h1>
                <div className='navlink'>
                  <a href='/login'>Login</a>
                    <a href='/Client'>Client</a>
                    <a href='/Category'>Category</a>
                    <a href='/Employee'>Employee</a>
                </div>
            </nav>
            <h1 className="word">WELCOME</h1>
        </div>
    );
}

export default Home;
