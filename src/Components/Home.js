import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [name, setName] = useState("USERNAME");
    const [isNavOpen, setIsNavOpen] = useState(false); // State for toggling navbar

    useEffect(() => {
        const storedName = sessionStorage.getItem("username");
        if (storedName) {
            setName(storedName.toUpperCase());
        }
    }, []);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen); // Toggle navbar
    };

    return (
        <div>
            <nav className='navbar'>
                <h1 className='navhead'>{name}</h1>
                <button className='hamburger' onClick={toggleNav}>☰</button>
                <div className={`navlink ${isNavOpen ? 'active' : ''}`}>
                    <Link to={'/Client'}><button className='a'>Client</button></Link>
                    <Link to={'/Category'}><button className='a'>Category</button></Link>
                    <Link to={'/Employee'}><button className='a'>Employee</button></Link>
                </div>
            </nav>
            <h1 className="word1">WELCOME</h1>
        </div>
    );
}

export default Home;
